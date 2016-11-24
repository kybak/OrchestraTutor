Template.tier1.onCreated(function() {
    this.expanded = new ReactiveVar(false)
});

Template.tier1.events({
    'click .tier-header' (ev, tpl) {
        tpl.expanded.set(!tpl.expanded.get());
    }
});

Template.tier1.helpers({
    expanded () {
        return Template.instance().expanded.get()
    }
});