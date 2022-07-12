const modal = () => {
   const buttonUp = document.querySelector('.up')
   let sliderHeight = document.querySelector('.top-slider').clientHeight

   buttonUp.style.display = 'none'

   function trackScroll() {
      let scrolled = window.pageYOffset

      if (scrolled >= sliderHeight) {
         buttonUp.style.display = 'block'
      } else {
         buttonUp.style.display = 'none'
      }
   }

   function backToTop() {
      if (window.pageYOffset > 0) {
         window.scrollBy(0, -100)
         setTimeout(backToTop, 10)
      }
   }

   window.addEventListener('scroll', trackScroll)
   buttonUp.addEventListener('click', backToTop)

}

export default modal