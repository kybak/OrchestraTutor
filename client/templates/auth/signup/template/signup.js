import {Dialog} from '../../../../../lib/dialog.js'
import {initStudentSignup} from '../components/init-student.js'
import {validate} from '../../../../../lib/validator.js'

Meteor.startup(function () {
    AutoForm.addHooks('studentSignup', {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            const form = $('#studentSignup')[0];
            if (validate(form, form.length)) initStudentSignup(insertDoc);
        }
    });
    /*AutoForm.hooks({
     studentSignup: {
     onSubmit: function (insertDoc, updateDoc, currentDoc) {
     console.log(currentDoc);
     console.log('sfd');
     //this.done();
     },
     onSuccess: function(formType, result) {

     }
     }
     });*/
});

Template.studentSignup.onCreated(function () {
    this.flipped = new ReactiveVar(false);
    this.profileHide = new ReactiveVar(false);

});

Template.studentSignup.events({
    'click .next'(ev, tpl) {
        if (validate($('#studentSignup')[0], 5)) tpl.flipped.set(!tpl.flipped.get());
    },
    'click .toBilling'(ev, tpl) {
        if (validate($('#studentSignup')[0], 14)) {
            tpl.profileHide.set(true);
            tpl.flipped.set(!tpl.flipped.get());
        }
    },
    'click .toProfile'(ev, tpl) {
        tpl.profileHide.set(false)
    },
    'click .terms'(ev) {
        const dialog = new Dialog();
        dialog.openDialog(ev, 'terms')
    },
    'click .go-back'(ev, tpl) {
        tpl.flipped.set(!tpl.flipped.get());
    }
});

Template.studentSignup.helpers({
    flipped() {
        return Template.instance().flipped.get()
    },
    profileHide() {
        return Template.instance().profileHide.get();
    }
});