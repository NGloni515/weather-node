const request = require('request')

forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6a020f2ed07ace24dad1e722b019387c&query='+latitude+','+longitude+'&units=f'

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.error){
            callback('Unabled to find location', undefined)
        } else{
            callback(undefined, body.current.precip + '% percentage of rain')
        }
    })
}

module.exports = forecast