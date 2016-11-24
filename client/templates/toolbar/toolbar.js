Template.toolbar.events({
    'click .logout'() {
        Meteor.logout(function (err, res) {
            if (err) {
                Bert.alert('Sorry, can\'t log you out right now.', 'danger')
            } else {
                Bert.alert('Have a nice day!', 'success', 'growl-top-right');

                FlowRouter.go('home')
            }
        })
    }
});