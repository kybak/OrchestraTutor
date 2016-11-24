export const validate = (form, length) => {
    let valid = true;
    for (let i = 0; i < length; i++) {
        let e = form[i];
        if (!e.checkValidity()) {
            $(e).addClass('invalid');
            Bert.alert('Please fill in the required fields', 'danger', 'growl-top-right');
            valid = false;
        } else {
            $(e).removeClass('invalid');
        }
    }

    return valid;
};