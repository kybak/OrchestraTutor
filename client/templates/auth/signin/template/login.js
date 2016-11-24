import {validate} from '../../../../../lib/validator.js'

Template.login.events({
    'submit #login-form'(ev) {
        ev.preventDefault();
        const form = ev.target;
        if (validate(form, form.length)) Meteor.loginWithPassword(ev.target.email.value, ev.target.password.value, function(err, res) {
            if (err) {
                Bert.alert(err.reason, 'danger');
            } else {
                FlowRouter.go('dashboard')
            }
        });
    }
});

Template.login.onRendered(function() {
   if (Meteor.user()) FlowRouter.go('home')
});