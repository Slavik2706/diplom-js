
const validForm = () => {
   const nameInput = document.querySelector('form [placeholder="Ваше имя"]')
   const phoneInput = document.querySelector('form [placeholder="Телефон*"]')

   nameInput.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^а-яА-Я\- ]/, "")
   })

   nameInput.addEventListener('blur', (event) => {
      let word = event.target.value
      word = word.split('')
      for (let i = 0; i < word.length; i++) {
         if (i === 0) {
            word[i] = word[i].toUpperCase()
         }
      }
      word = word.join('')
      event.target.value = word
   })

   phoneInput.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^\d\+]/, "")
   })

}

export default validForm

