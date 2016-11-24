var Future = Npm.require('fibers/future');

Meteor.methods({
    createTrialCustomer: function (customer) {
        check(customer, {
            name: String,
            emailAddress: String,
            password: String,
            plan: String,
            token: String,
            profile: Object
        });

        var emailRegex = new RegExp(customer.emailAddress, "i"), lookupCustomer;
        if (Meteor.users) {
            lookupCustomer = Meteor.users.findOne({"emails.address": emailRegex});
        }

        if (!lookupCustomer) {
            var newCustomer = new Future();

            Meteor.call('stripeCreateCustomer', customer.token, customer.profile.parentEmail, function (error, stripeCustomer) {
                if (error) {
                    console.log(error);
                } else {
                    var customerId = stripeCustomer.id,
                        plan = customer.plan;

                    Meteor.call('stripeCreateSubscription', customerId, plan, function (error, response) {
                        if (error) {
                            console.log(error);
                        } else {
                            try {
                                var user = Accounts.createUser({
                                    email: customer.emailAddress,
                                    password: customer.password,
                                    profile: customer.profile
                                });

                                var subscription = {
                                    customerId: customerId,
                                    createdAt: new Date(),
                                    subscription: {
                                        plan: {
                                            name: customer.plan
                                        },
                                        payment: {
                                            card: {
                                                type: stripeCustomer.sources.data[0].brand,
                                                lastFour: stripeCustomer.sources.data[0].last4
                                            },
                                            nextPaymentDue: response.current_period_end
                                        }
                                    }
                                };

                                Roles.addUsersToRoles(user, 'student');

                                Meteor.users.update(user, {
                                    $set: subscription
                                }, function (error, response) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        newCustomer.return(user);
                                    }
                                });
                            } catch (exception) {
                                newCustomer.return(exception);
                            }
                        }
                    });
                }
            });
            return newCustomer.wait();
        } else {
            Bert.alert('Sorry, that customer email already exists!', 'danger');
            throw new Meteor.Error('customer-exists', 'Sorry, that customer email already exists!');
        }
    }
});

