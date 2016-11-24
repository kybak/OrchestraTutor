export const getBackgroundImageSize = (id) => {

    var imageSrc = window.getComputedStyle(document.getElementById('wave'), null)
        .backgroundImage
        .replace(/-webkit-cross-fade\(url\((['"])?(.*?)\1\)/gi, '$2')
        .split(',')[0];

console.log(imageSrc);
    console.log(window.getComputedStyle(document.getElementById('wave'), null).backgroundImage);

    var image = new Image();
    image.src = "http://localhost:3000/slide1.png";

    var width = image.width,
        height = image.height;

    return {height: height, width: width};


};