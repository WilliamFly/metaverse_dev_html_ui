const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/ 
document.getElementById('your-email-address-Jst').addEventListener('input', function (evt) {
    if(emailRegex.test(this.value)){
        document.getElementById('top-product-sale-6Yr').style['background-color'] = "#006838"
        document.getElementById('top-product-sale-6Yr').style['cursor'] = "pointer"
    } else {
        document.getElementById('top-product-sale-6Yr').style['background-color'] = "#000000"
        document.getElementById('top-product-sale-6Yr').style['cursor'] = ""
    }
});

let slide = 1
document.getElementById('cart-9NA').addEventListener('click', function (evt) {
    if (slide == 1) {
        slide = 2
        document.getElementById('review-1').style['display'] = "none"
        document.getElementById('review-2').style['display'] = "none"
        document.getElementById('review-3').style['display'] = "flex"
        document.getElementById('review-4').style['display'] = "flex"
        document.getElementById('review-5').style['display'] = "none"
        document.getElementById('review-6').style['display'] = "none"
        document.getElementById('pignation-Jf4').src = "./assets/pignation2.png"
    } else if (slide == 2){
        slide = 3
        document.getElementById('review-1').style['display'] = "none"
        document.getElementById('review-2').style['display'] = "none"
        document.getElementById('review-3').style['display'] = "none"
        document.getElementById('review-4').style['display'] = "none"
        document.getElementById('review-5').style['display'] = "flex"
        document.getElementById('review-6').style['display'] = "flex"
        document.getElementById('pignation-Jf4').src = "./assets/pignation3.png"
    } else {
        slide = 1
        document.getElementById('review-1').style['display'] = "flex"
        document.getElementById('review-2').style['display'] = "flex"
        document.getElementById('review-3').style['display'] = "none"
        document.getElementById('review-4').style['display'] = "none"
        document.getElementById('review-5').style['display'] = "none"
        document.getElementById('review-6').style['display'] = "none"
        document.getElementById('pignation-Jf4').src = "./assets/pignation1.png"
    }
});

document.getElementById('cart-Tdk').addEventListener('click', function (evt) {
    if (slide == 1) {
        slide = 3
        document.getElementById('review-1').style['display'] = "none"
        document.getElementById('review-2').style['display'] = "none"
        document.getElementById('review-3').style['display'] = "none"
        document.getElementById('review-4').style['display'] = "none"
        document.getElementById('review-5').style['display'] = "flex"
        document.getElementById('review-6').style['display'] = "flex"
        document.getElementById('pignation-Jf4').src = "./assets/pignation3.png"
    } else if (slide == 2){
        slide = 1
        document.getElementById('review-1').style['display'] = "flex"
        document.getElementById('review-2').style['display'] = "flex"
        document.getElementById('review-3').style['display'] = "none"
        document.getElementById('review-4').style['display'] = "none"
        document.getElementById('review-5').style['display'] = "none"
        document.getElementById('review-6').style['display'] = "none"
        document.getElementById('pignation-Jf4').src = "./assets/pignation1.png"
    } else {
        slide = 2
        document.getElementById('review-1').style['display'] = "none"
        document.getElementById('review-2').style['display'] = "none"
        document.getElementById('review-3').style['display'] = "flex"
        document.getElementById('review-4').style['display'] = "flex"
        document.getElementById('review-5').style['display'] = "none"
        document.getElementById('review-6').style['display'] = "none"
        document.getElementById('pignation-Jf4').src = "./assets/pignation2.png"
    }
});
