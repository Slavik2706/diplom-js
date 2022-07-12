const carousel = () => {
   const carousel = document.querySelector('.services-carousel')
   const slides = carousel.querySelectorAll('.col-sm-6')
   const arrow = document.querySelector('.services-arrow')

   let currentSlide = 0

   function showSlides(index) {
      for (let i = 0; i < slides.length; i++) {
         if (i < 3 && index == 0) {
            slides[i].style.display = 'block'
         } else if (i > 2 && index == 1) {
            slides[i].style.display = 'block'
         } else {
            slides[i].style.display = 'none'
         }
      }
   }

   arrow.addEventListener('click', (e) => {
      if (e.target.matches('.arrow-right')) {
         currentSlide++
      } else if (e.target.matches('.arrow-left')) {
         currentSlide--
      }
      if (currentSlide > 1) {
         currentSlide = 0
      }
      if (currentSlide < 0) {
         currentSlide = 1
      }
      showSlides(currentSlide)
   })
   showSlides(currentSlide)
}

export default carousel