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