const scrollToBlock = () => {
   const topMenu = document.querySelector('.top-menu')
   const services = document.querySelector('.services-section')
   const questions = document.querySelector('.accordeon-section')
   const contacts = document.querySelector('.contacts-section')

   let scrolledTo = 0

   topMenu.addEventListener('click', (e) => {
      e.preventDefault()

      if (e.target.matches('.item-services')) {
         let servicesTop = services.getBoundingClientRect().top
         window.scroll(0, servicesTop + scrolledTo)
      }
      if (e.target.matches('.item-faq')) {
         let questionsTop = questions.getBoundingClientRect().top
         window.scroll(0, questionsTop + scrolledTo)
      }
      if (e.target.matches('.item-contacts')) {
         let contactsTop = contacts.getBoundingClientRect().top
         window.scroll(0, contactsTop + scrolledTo)
      }
   })

   window.addEventListener('scroll', () => {
      scrolledTo = window.pageYOffset
   })
}

export default scrollToBlock