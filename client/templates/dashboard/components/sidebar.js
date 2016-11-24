
Template.sidebar.onCreated(function () {
    this.block = false;
});

Template.sidebar.events({
    'mouseenter .sidebar'(ev, tpl) {
        if (tpl.block === false) {
            setTimeout(function () {
                $('.sidebar-unit').css({
                    width: '200px',
                    padding: '0 20px',
                    boxSizing: 'border-box',
                    justifyContent: 'space-between'
                });
                $('.label').css({'opacity': '1', right: '20px'});
                tpl.block = true;
            }, 200);
        }


    },
    'mouseleave .sidebar'(ev, tpl) {
        $('.sidebar-unit').css({width: '100px', justifyContent: 'center'});
        $('.label').css({'opacity': '0', right: '100px'});
        tpl.block = false;

    },
    'mouseenter .sidebar-unit'(ev) {
        console.log(ev);
        $(ev.target.childNodes[1]).css('color', 'white')
    },
    'mouseleave .sidebar-unit'(ev) {
        $('.sidebar-link').css('color', '#003c6b');
    }
});