export default function ImagePreloader(imgElements) {
    "use strict";

    imgElements.forEach(imgElement => {
        (new Promise(function (resolve) {
            const image = new Image();
            image.onload = resolve;
            image.onerror = resolve;
            image.src = imgElement.attributes['data-src'].nodeValue;
        })).then(() => {
            imgElement.src = imgElement.attributes['data-src'].nodeValue;
        });
    });
}