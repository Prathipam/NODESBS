const request = require('request')
const weather = (lat,long,callback) =>{
    const url = 'https://api.darksky.net/forecast/4d453006e97d60e023029a1e846042b3/'+lat+','+long
    console.log(url)
    request({url:url,json:true},(error,response) => {
        if(error){
            callback('Unable to find the location service',undefined)
        } else if(response.body.error){
            callback('unable the find location',undefined)
        }else{
            callback(undefined,{
                summary:response.body.currently.summary,
                temperature: response.body.currently.temperature,
                precipitation: response.body.currently.precipProbability
            })
        }
    })
}

module.exports = weather