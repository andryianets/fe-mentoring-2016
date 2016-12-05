export default function ImagePreloader(imgElements) {
    "use strict";

    for (let imgElement of imgElements) {
        (new Promise(resolve => {
            Object.assign(new Image(), {
                onload: resolve,
                onerror: resolve,
                src: imgElement.attributes['data-src'].nodeValue
            });
        })).then(() => {
            imgElement.src = imgElement.attributes['data-src'].nodeValue;
        });
    }
}