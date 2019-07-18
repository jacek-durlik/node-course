const request = require('request');

const geocode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+
    encodeURIComponent(location)+'.json?access_token=pk.eyJ1IjoiYW5yaWwiLCJhIjoiY2p4dzdmaWh4MGJyeTNjcGZjOWNwbjdwbyJ9.xtsJQRHshJ4zSXQRtTIKnw';
    request({ url, json:true}, (error, response) => {
        
        if (error) {
            callback('Unable to connect to Geocode service', undefined)
        }  else if (response.body.message) {
            const {message} = response.body
            callback('Something is wrong with the url, error is: '+ response.body.message, undefined); 
        }
        else if (response.body.features.length==0) {
            callback('Something is wrong with the location. No match found', undefined); 
        } else {
            const features = response.body.features[0];
            const data = {
                latitude: features.center[1],
                longitude: features.center[0],
                location: features.place_name
            }
            callback(undefined, data);
        }
    })
}

module.exports = geocode