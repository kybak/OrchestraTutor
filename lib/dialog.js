

export class Dialog {

    openDialog(ev, dialogName) {
        let x = ev.screenX;
        let y = ev.screenY;

        document.getElementById(dialogName).style.zIndex = 99999999999999999;
        document.getElementById(dialogName).style.opacity = 1;
        document.getElementById(dialogName).style.height = '100vh';
        document.getElementById(dialogName).style.width = '100vw';
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.top = '50%';
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.right = '50%';
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.transform = 'translateY(-50%) translateX(50%)';
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.width = '560px';
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.maxHeight = '85vh';

    }

    closeDialog(ev, dialogName) {
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.transform = 'none';
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.top = '-200px';
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.right = '-190px';
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.width = 0;
        document.getElementById(dialogName).getElementsByTagName( 'div' )[0].style.minHeight = 0;
        setTimeout(function() {
            document.getElementById(dialogName).style.zIndex = -1;
            document.getElementById(dialogName).style.opacity = 0;
            document.getElementById(dialogName).style.height = 0;
            document.getElementById(dialogName).style.width = 0;
        }, 250);

    }
}