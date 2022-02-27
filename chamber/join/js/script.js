let myBusiPoistion = document.querySelector('.regulation')

if (regex.test(myBusiPoistion).value) {
    myBusiPoistion.toggleClass('valid');
}
else {
    myBusiPoistion.toggleClass('invalid');
}


myBusiPoistion.onkeydown = function() {
    const regex = /\w\s{7,}/;
}