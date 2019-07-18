console.log('loading client side javascript')

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data)=>
    {
        console.log(data)
    })
})

fetch('/weather?address=Gdansk').then((response) => {
    if (response) {
        response.json().then((data) => {
            if (data.error) {
                console.log('Error in response', data.error)
            } else {
                console.log(data)
            }
        }).catch((error) => console.log('Error on response', error))
    }
}).catch((error) => console.log('Error on fetch',error))

const weatherForm = document.querySelector('form')
const searchString = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    messageOne.textContent = 'loading...'
    messageTwo.textContent = ''
    fetch('/weather?address='+searchString.value).then((response) => {
        if (response) {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                    console.log('Error in response', data.error)
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = JSON.stringify(data.weatherData)
                    console.log(data)
                }
            }).catch((error) => console.log('Error on response', error))
        }
    }).catch((error) => console.log('Error on fetch',error))
    
})