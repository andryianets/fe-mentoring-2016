export default function ImagePreloader(imgElements) {
    "use strict";

    imgElements.forEach(imgElement => {
        (new Promise(resolve => {
            Object.assign(new Image(), {
                onload: resolve,
                onerror: resolve,
                src: imgElement.attributes['data-src'].nodeValue
            });
        })).then(() => {
            imgElement.src = imgElement.attributes['data-src'].nodeValue;
        });
    });
}