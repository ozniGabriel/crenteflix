$('.owl-carousel').owlCarousel({
  loop:true,
  margin:6,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  smartSpeed: 3000,
  slideTransition: 'ease-out',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
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