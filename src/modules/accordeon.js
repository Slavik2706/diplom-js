const accordeon = () => {
   const accordeon = document.querySelector('.accordeon')
   const tab = accordeon.querySelectorAll('.element')
   //const title = document.querySelectorAll('.title');
   const content = accordeon.querySelectorAll('.element-content')

   accordeon.addEventListener('click', (e) => {
      const target = e.target.closest('.element')
      if (target) {
         tab.forEach((item, i) => {
            if (item === target) {
               tab[i].classList.add('active')
               content[i].style.display = 'block'
            }
            else {
               tab[i].classList.remove('active')
               content[i].style.display = 'none'
            }
         });
      }
   });
}

export default accordeon