
function initStudentSignup(student) {
    $('#loading').css({display: 'flex', justifyContent: 'center', alignItems: 'center'});

    STRIPE.getToken('#studentSignup', {
        name: $('[data-stripe="name"]').val(),
        number: $('[data-stripe="cardNumber"]').val(),
        exp_month: $('[data-stripe="expMo"]').val(),
        exp_year: $('[data-stripe="expYr"]').val(),
        cvc: $('[data-stripe="cvc"]').val()
    }, function () {
        var customer = {
            name: student.profile.firstName + ' ' + student.profile.lastName,
            emailAddress: student.email,
            password: student.password,
            plan: FlowRouter.getParam("plan"),
            token: $('[name="stripeToken"]').val(),
            profile: student.profile
        };

        Meteor.call('createTrialCustomer', customer, function (error, response) {
            if (error) {
                $('#loading').css('display', 'none');
                Bert.alert(error.reason, 'danger');
            } else {
                if (response.error) {
                    $('#loading').css('display', 'none');
                    Bert.alert(response.message, 'danger');
                } else {
                    Meteor.loginWithPassword(customer.emailAddress, customer.password, function (error) {
                        if (error) {
                            $('#loading').css('display', 'none');
                            Bert.alert(error.reason, 'danger');
                        } else {
                            $('#loading').css('display', 'none');
                            FlowRouter.go('dashboard');
                        }
                    });
                }
            }
        });
    });
}

export { initStudentSignup }
