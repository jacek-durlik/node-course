const chalk = require('chalk')
const request = require('request');
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

if (process.argv.length >=2 ) {
    const location = process.argv[2];
    if (location) {
        geocode(location, (error, {latitude, longitude, location}) =>{
                console.log(error);
                console.log(latitude, longitude, location)
                weather(latitude, longitude, (error, weatherData) => console.log(error, weatherData))   
            }

        )
    }
}