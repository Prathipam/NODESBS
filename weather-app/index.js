const request = require('request')
const geoCode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')
const address = process.argv[2]
if(address){   
    geoCode(address,(error,data) => {
        if(error){
        return console.log(error)
        } 
            
        weather(data.long,data.lat,(error,foreCast) => {
            if(error)
                return console.log(error)
            console.log(data.location)
            console.log(foreCast)
        })
        
    })
}
else{
    console.log('Please enter the city name')
}

// Separate function created using callback abstraction

//dark sky to get weather information
// const url = 'https://api.darksky.net/forecast/4d453006e97d60e023029a1e846042b3/1.290270,103.8519'
// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect the network')
//     } else if(response.body.error){
//         console.log('Unable to find the location')
//     } else{
//         console.log("It is currently "+response.body.currently.temperature+" degrees out. There is " +(response.body.currently.precipProbability)*100+"% chance of rain today ")
//     }
// })

// Get latitude and longitude of a place using mapbox

// const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/singapore.json?access_token=pk.eyJ1IjoicHJhdGhpcGEiLCJhIjoiY2s1ejBuY2JzMDliNDNtbzVyb3RycjFvdSJ9.dh6_EO-cUpKgRjRQRbkQZw'
// request({url:mapUrl,json:true},(error,response) => {
//     if(error){
//         console.log('Unable to connect the network')
//     } else if(response.body.features.length === 0){
//         console.log('Unable to find the location')
//     } else {    
//         lat = response.body.features[0].geometry.coordinates[0]
//         long = response.body.features[0].geometry.coordinates[1]
//         console.log("latitude:"+lat+",longitude:"+long)
//     }
// })