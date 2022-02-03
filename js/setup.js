$('.owl-carousel').owlCarousel({
  loop:true,
  margin:6,
  dots: false,
  nav: true,
  navText: ["<img class='arrow' src='../img/arrow-left-circle.svg' alt=''/>", "<img class='arrow' src='../img/arrow-right-circle.svg' alt=''/>"],

  responsive:{
      0:{
          items:1,
          nav: false,
          autoplay: true,
          smartSpeed: 1000,
          autoplayHoverPause: true

      },
      600:{
          items:3
      },
      1000:{
          items:3
      },
      1300:{
          items: 4
      }
  }
})

function ativarMenuHamburguer(){
    let a = document.querySelector('.leftElementsMenu').style["display"]
    if(a !== "flex"){
        document.querySelector('.leftElementsMenu').style = "display: flex;"
    } else {
        document.querySelector('.leftElementsMenu').style = "display: none"
    }

}

function salvarFilme(){
    alert('Filme adicionado a sua Lista!')
}