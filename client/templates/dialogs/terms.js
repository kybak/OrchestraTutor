import {Dialog} from '../../../lib/dialog.js'

Template.terms.events({
   'click .close'(ev) {
       const dialog = new Dialog();
       dialog.closeDialog(ev, 'terms')
   }
});