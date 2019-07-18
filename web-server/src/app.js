const path = require('path') 
const express = require('express')
const hbs = require('hbs')
const weather = require('./weather')
const geocode = require('./geocode')

const publicDirectory =  path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectory))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Jaq'
    })
})

   

app.get('/weather', (req, res) => { 
    if (!req.query.address) {
        return res.send({
            error: 'Address must be provided'
        })
    }
    const address = req.query.address
    geocode(address, (error, geoData) =>{
        if (error) {
            console.log('Unable to fetch location for '+address)
            return res.send({error: 'Unable to fetch location for '+address})
        }
        weather(geoData.latitude, geoData.longitude, (error, weatherData) => {
            if (error) {
                console.log('Unable to fetch weather for '+address)
                return res.send({error: 'Unable to fetch weather for '+geoData.location + ', error is: '+error})
            }
            res.send({
                latitude: geoData.latitude,
                longitude: geoData.longitude,
                location: geoData.location,
                weatherData: weatherData
            })
        })
    })

})

app.get('/products', (req, res) => {
    console.log(req.query)
    res.send({
        products: []
    }) 
})



app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About page',
        name: 'Tereferekuku'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help',
        message: 'Help for this app',
        name: 'Tereferekuku '
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'help 404 page',
        errorMsg: 'Cannot get help article',
        name: 'Tereferekuku'
    })
})

app.get('*', (req, res) => {
    res.render("404", {
        title: 'My 404 page',
        errorMsg: 'Page not found',
        name: 'Tereferekuku '
    })

})  

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})