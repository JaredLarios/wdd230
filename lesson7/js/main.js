/*  Lazzzy Loading */

const iamges = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const srcs = img.getAttribute("data-src");
    if (!srcs) {
        return;
    }

    img.src = srcs;
    img.onload = () => {img.removeAttribute('data-src')};
}

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 50px 0px',
};

const imgObserver  = new IntersectionObserver(
    (entries, imgObserver) => {
        entries.forEach( entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);

iamges.forEach(image => {
    imgObserver.observe(image);
})