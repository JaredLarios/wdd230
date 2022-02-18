/*  Lazzzy Loading */

const iamges = document.querySelectorAll('[data-src]');

function preLoadImage(img) {
    const src = img.getAttibute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {};

const imgObserver  = new IntersectionObserver(
    (entries, imgObserver) => {
        entries.forEach( entry => {
            if (!FileSystemEntry.isIntersection) {
                return;
            } else {
                preLoadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);