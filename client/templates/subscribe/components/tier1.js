Template.tier2.onCreated(function() {
    this.expanded = new ReactiveVar(false)
});

Template.tier2.events({
    'click .tier-header' (ev, tpl) {
        tpl.expanded.set(!tpl.expanded.get());
    }
});

Template.tier2.helpers({
    expanded () {
        return Template.instance().expanded.get()
    }
});
