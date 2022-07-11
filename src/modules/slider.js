const slider = () => {
   const sliderBlock = document.querySelector('.top-slider')
   const slides = sliderBlock.querySelectorAll('.item')

   const timerInterval = 3000

   let currentSlide = 0
   let interval


   const autoSlide = () => {
      for (let i = 0; i < slides.length; i++) {
         if (currentSlide === i) {
            slides[i].style.display = 'block'
         } else {
            slides[i].style.display = 'none'
         }
      }
      currentSlide++

      if (currentSlide == slides.length) {
         currentSlide = 0
      }
   }
   const startSlide = (timer = 3000) => {
      interval = setInterval(autoSlide, timer)
   }

   startSlide(timerInterval)
}
export default slider