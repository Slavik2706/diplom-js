const sendForm = () => {
   const form = document.querySelector('#form-callback')
   const statusBlock = document.createElement('div')
   const phoneStatus = form.querySelector('p')
   const loadText = 'Идет отправка...'
   const errorText = 'Ошибка!'
   const succesText = 'Отправлено!'

   const statusTel = document.createElement('div')


   const validate = (list) => {
      let success = true
      list.forEach(input => {
         if (input.getAttribute('name') === 'tel') {
            if (!/.{11,}/.test(input.value)) {
               success = false
            }
         }
      })
      return success
   }

   const delayMessage = (ms) => {
      return new Promise(
         resolve => setTimeout(resolve, ms)
      )
   }

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json; charset=UTF-8"
         }
      }).then(res => res.json())
   }

   form.addEventListener('submit', (event) => {
      event.preventDefault()

      const formElements = form.querySelectorAll('input')
      const formData = new FormData(form)
      const formBody = {}


      formData.forEach((val, key) => {
         formBody[key] = val
      })

      if (validate(formElements)) {
         statusBlock.textContent = loadText
         form.append(statusBlock)

         sendData(formBody)
            .then(data => {
               statusBlock.textContent = succesText

               formElements.forEach(input => {
                  if (input.value !== 'Отправить') {
                     input.value = ''
                  }
               })
            })
            .catch(error => {
               statusBlock.textContent = errorText
            })
         delayMessage(3000).then(() => {
            statusBlock.remove()
         })
         statusTel.textContent = ""
      } else {
         statusTel.style.color = "red"
         statusTel.textContent = "*Короткий номер телефона"
         phoneStatus.prepend(statusTel)
      }
   })
}

export default sendForm