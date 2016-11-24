import {getBackgroundImageSize} from '../../lib/getBackgroundImageSize.js'

Template.landingPage.onRendered(function () {
    const bgSize = getBackgroundImageSize('wave');
    console.log(bgSize);

    console.log(window.getComputedStyle(document.getElementById('wave'), null).backgroundSize)
});