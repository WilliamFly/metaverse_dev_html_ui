function scroll(event) {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const finalPercentage = Math.round((scrollTop + clientHeight) / scrollHeight * 100)
    if (finalPercentage >= 86) {
        window.removeEventListener("scroll", scroll)
        setTimeout(() => { 
            document.getElementById('work-1').classList.add("fadeIn");
        }, 1000);
        setTimeout(() => { 
            document.getElementById('work-2').classList.add("fadeIn");
        }, 2000);
        setTimeout(() => { 
            document.getElementById('work-3').classList.add("fadeIn");
        }, 3000);
        setTimeout(() => { 
            document.getElementById('work-4').classList.add("fadeIn");
        }, 4000);
        setTimeout(() => { 
            document.getElementById('work-5').classList.add("fadeIn");
        }, 5000);
        setTimeout(() => { 
            document.getElementById('work-6').classList.add("fadeIn");
        }, 6000);
    }
}

window.addEventListener("scroll", scroll)
scroll()