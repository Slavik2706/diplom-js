import { animate } from './helpers'

const modal = () => {
   const body = document.querySelector('body')
   const modal = document.querySelector('.modal-callback')
   const modalOverlay = document.querySelector('.modal-overlay')
   const buttons = document.querySelectorAll('.callback-btn, .button-services')
   const temp = document.querySelectorAll('.services-section .element')
   console.log(temp);
   let opacity = 0
   buttons.forEach(btn => {
      btn.addEventListener('click', (event) => {
         event.preventDefault();
         modal.style.opacity = opacity;
         modal.style.display = 'block'
         modalOverlay.style.display = 'block'
         animate({
            duration: 1000,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               modal.style.opacity = progress
            }
         })
      })
   })

   temp.forEach(btn => {
      btn.addEventListener('click', (e) => {
         console.log(e.offsetY);

         if ((e.offsetX > 90 && e.offsetX < 290) && (e.offsetY > 98 && e.offsetY < 148)) {
            modal.style.opacity = opacity;
            modal.style.display = 'block'
            modalOverlay.style.display = 'block'
            animate({
               duration: 1000,
               timing(timeFraction) {
                  return timeFraction;
               },
               draw(progress) {
                  modal.style.opacity = progress
               }
            })
         }
      })
   })

   body.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay') || e.target.matches('.modal-close img')) {
         animate({
            duration: 1000,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               modal.style.opacity = 1 - progress
            }
         })
         setTimeout(() => {
            modal.style.display = 'none'
            modalOverlay.style.display = 'none'
         }, 1000)
      }
   })
}

export default modal