const sendForm = () => {
   const form = document.querySelector('#form-callback')
   const statusBlock = document.createElement('div')
   const loadText = 'Загрузка...'
   const errorText = 'Ошибка...'
   const succesText = 'Спасибо! Наш менеджер с Вами свяжется!'

   console.log(form);
   form.addEventListener('submit', (event) => {
      event.preventDefault()


   })

   // const sendData = (data) => {
   //    return fetch('https://jsonplaceholder.typicode.com/posts', {
   //       method: 'POST',
   //       body: JSON.stringify(data),
   //       headers: {
   //          "Content-Type": "multipart/form-data"
   //       }
   //    }).then(res => res.json())
   // }

   // const delayMessage = (ms) => {
   //    return new Promise(
   //       resolve => setTimeout(resolve, ms)
   //    )
   // }

   // const submitForm = () => {
   //    const formElements = form.querySelectorAll('input')
   //    const formData = new FormData(form)
   //    const formBody = {}

   //    statusBlock.textContent = loadText
   //    statusBlock.style.color = '#FFFFFF'

   //    form.append(statusBlock)

   //    formData.forEach((val, key) => {
   //       formBody[key] = val
   //    })

   //    someElem.forEach(elem => {
   //       const element = document.getElementById(elem.id)

   //       if (elem.type === 'block') {
   //          formBody[elem.id] = element.textContent
   //       } else if (elem.type === 'input') {
   //          formBody[elem.id] = element.value
   //       }
   //    })

   //    if (validate(formElements)) {
   //       sendData(formBody)
   //          .then(data => {
   //             statusBlock.textContent = succesText

   //             formElements.forEach(input => {
   //                input.value = ''
   //             })
   //          })
   //          .catch(error => {
   //             statusBlock.textContent = errorText
   //          })
   //       delayMessage(3000).then(() => {
   //          statusBlock.remove()
   //       })
   //    } else {
   //       alert('Данные не валидны!!!')
   //    }
   // }

   // try {
   //    if (!form) {
   //       throw new Error('Верните форму на место, пожалуйста))')
   //    }
   //    form.addEventListener('submit', (event) => {
   //       event.preventDefault()

   //       submitForm()
   //    })
   // } catch (error) {
   //    console.log(error.message);
   // }
}

export default sendForm