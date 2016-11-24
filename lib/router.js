
FlowRouter.route( '/', {
    action: function() {
        BlazeLayout.render( 'applicationLayout', { main: 'landingPage' } );
    },
    name: 'home'
});

FlowRouter.route( '/subscribe', {
    action: function() {
        BlazeLayout.render( 'applicationLayout', { main: 'subscribeOptions' } );
    },
    name: 'subscribe'
});

FlowRouter.route( '/student-signup/:plan', {
    action: function() {
        BlazeLayout.render( 'applicationLayout', { main: 'studentSignup' } );
    },
    name: 'studentSignup'
});

FlowRouter.route( '/login', {
    action: function() {
        BlazeLayout.render( 'applicationLayout', { main: 'login' } );
    },
    name: 'login'
});

FlowRouter.route( '/dashboard', {
    action: function() {
        BlazeLayout.render( 'applicationLayout', { main: 'dashboard' } );
    },
    name: 'dashboard'
});