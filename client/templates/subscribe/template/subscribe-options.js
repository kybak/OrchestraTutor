Template.subscribeOptions.onCreated(function () {

});

Template.subscribeOptions.events({

});

Template.subscribeOptions.helpers({
   expanded () {
       console.log(Template.instance().expanded);
       console.log(Template.instance().expanded.get());
       return Template.instance().expanded.get()
   }
});