const request = require('request')

const geoCode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhdGhpcGEiLCJhIjoiY2s1ejBuY2JzMDliNDNtbzVyb3RycjFvdSJ9.dh6_EO-cUpKgRjRQRbkQZw'
    request({url,url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect the network',undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find the location',undefined)
        } else {    
           callback(undefined,{ 
            lat : response.body.features[0].geometry.coordinates[0],
            long : response.body.features[0].geometry.coordinates[1],
            location : response.body.features[0].place_name
           })
        }
    })
}

module.exports = geoCode