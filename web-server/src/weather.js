const request = require('request');

const weather = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/33c3a14825b1b0871e27a60ea00046d0/'+latitude+','+longitude+'?units=si&lang=pl';

    request( { url, json:true } , (error, response) => {

        if (error) {
            callback('Unable to connect to Weather service', undefined)
        } else if (response.body.error) {
            const {error: bodyError} = response.body;
            callback('Something is wrong with the url, error is: ' + bodyError, undefined);
        } else { 
            const { currently, daily} = response.body
            const {temperature, precipProbability} = currently
            const data = {
                summary: daily.data[0].summary,
                temperature,
                precipation: (precipProbability*100)+'%'
            }
            callback( undefined, data)
        }
        
    })
}

module.exports = weather