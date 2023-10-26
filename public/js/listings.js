for (let index = 1; index < 8; index++) {
    document.getElementById(`list-${index}`).addEventListener('click', function (evt) {
        for (let index2 = 1; index2 < 8; index2++) {
            if (index == index2) {
                document.getElementById(`list-${index2}`).children[0].src = "./assets/layout-grid-2-L3C.png"
                document.getElementById(`list-${index2}`).children[1].style['color'] = "#ffffff"
            } else {
                document.getElementById(`list-${index2}`).children[0].src = "./assets/layout-grid-2-8FU.png"
                document.getElementById(`list-${index2}`).children[1].style['color'] = "#ffdac0"
            }
        }
    })

}