const request = require('request')
const weather = (lat,long,callback) =>{
    const url = 'https://api.darksky.net/forecast/4d453006e97d60e023029a1e846042b3/'+lat+','+long
    console.log(url)
    request({url,json:true},(error,{body}) => {
        if(error){
            callback('Unable to find the location service',undefined)
        } else if(body.error){
            callback('unable the find location',undefined)
        }else{
            callback(undefined,{
                summary:body.currently.summary,
                temperature: body.currently.temperature,
                precipitation: body.currently.precipProbability
            })
        }
    })
}

module.exports = weather