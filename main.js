let html = document.querySelector('html')

html.addEventListener('click', function (e) {
    console.log(e.target.className)
    if (e.target.tagName === 'IMG') {
    document.querySelector('body').innerHTML = `<body> <header class="blur"> <a href=""> <img src="img/logo2.jpg" alt=""> </a> <p class="art">NSFW ART</p> </header> <div class="art-gallery"> <div class="left-arrow"><i class="fas fa-arrow-left fa-2x"></i></div> <div class="img-div"><img src="img/${e.target.className}.png" alt="" class="img-gal"></div> <div class="left-arrow"><i class="fas fa-arrow-right fa-2x"></i></div> <div class="close"><i class="fas fa-times fa-1.5x"></i></div> </div> <div class="container blur"> <div><img src="img/1.png" alt=""> </div> <div><img src="img/2.png" alt=""> </div> <div><img src="img/3.png" alt=""> </div> <div><img src="img/4.png" alt=""> </div> <div><img src="img/5.png" alt=""> </div> <div><img src="img/6.png" alt=""> </div> <div><img src="img/7.png" alt=""> </div> <div><img src="img/8.png" alt=""> </div> <div><img src="img/9.png" alt=""> </div> <div><img src="img/10.png" alt=""> </div> <div><img src="img/11.png" alt=""> </div> <div><img src="img/12.png" alt=""> </div> <div><img src="img/13.png" alt="" class="nsfw"> </div> <div><img src="img/14.png" alt=""> </div> <div><img src="img/15.png" alt=""> </div> <div><img src="img/16.png" alt=""> </div> <div><img src="img/17.png" alt=""> </div> <div><img src="img/18.png" alt=""> </div> </div></body>`

picNumber = e.target.className

}


    if (e.target.className === 'fas fa-arrow-right fa-2x') {        
        picNumber++
        console.log(picNumber)
        document.querySelector('.img-gal').src = `img/${picNumber}.png`
    }

    if (e.target.className === 'fas fa-arrow-left fa-2x') {        
        console.log(picNumber)
        if (picNumber > 1) {
            picNumber--
            document.querySelector('.img-gal').src = `img/${picNumber}.png`
        }
    }

    if (e.target.className === 'fas fa-times fa-1.5x') {
        document.querySelector('body').innerHTML = ` <header class="head"> <a href=""> <img src="img/logo2.jpg" alt=""> </a> <p class="art">NSFW ART</p> </header> <div class="container"> <div><img src="img/1.png" alt="" class="1"> </div> <div><img src="img/2.png" alt="" class="2"> </div> <div><img src="img/3.png" alt="" class="3"> </div> <div><img src="img/4.png" alt="" class="4"> </div> <div><img src="img/5.png" alt="" class="5"> </div> <div><img src="img/6.png" alt="" class="6"> </div> <div><img src="img/7.png" alt="" class="7"> </div> <div><img src="img/8.png" alt="" class="8"> </div> <div><img src="img/9.png" alt="" class="9"> </div> <div><img src="img/10.png" alt="" class="10"> </div> <div><img src="img/11.png" alt="" class="11"> </div> <div><img src="img/12.png" alt="" class="12"> </div> <div><img src="img/13.png" alt="" class="13"> </div> <div><img src="img/14.png" alt="" class="14"> </div> <div><img src="img/15.png" alt="" class="15"> </div> <div><img src="img/16.png" alt="" class="16"> </div> <div><img src="img/17.png" alt="" class="17"> </div> <div><img src="img/18.png" alt="" class="18"> </div> </div>`
    }
})

// header.addEventListener('click', artGallery(event))

// function artGallery(event) {

//     console.log(event.target)
// }


