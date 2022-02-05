function slide(images) {

    window.addEventListener('load', function () {
        console.log('loaded content');
        document.getElementById('slide').setAttribute('src',`${images[1]}`);
    })


}

export default slide;