const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//Import geocode and weather
const geoCode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')

// below the express server creation, create the path for the public folder
const publicPathDir = path.join(__dirname,'../public')
const viewsPathDir = path.join(__dirname,'../templates/views')
const partialsDir = path.join(__dirname,'../templates/partials')
app.use(express.static(publicPathDir))
//__dirname and __filename gives the entire path. 
// There is a built in module to access the path and do manipulations
//console.log(__dirname)
//console.log(__filename)

// settings for view engine and view path dir
app.set('view engine',hbs)
app.set('views',viewsPathDir)
hbs.registerPartials(partialsDir)

app.get('/',(req,res) => {
    res.render('index.hbs',{
        title:"Welcome",
        name:"Prathipa",
        text:"My weather App"
    })
})

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        title:"About Me",
        name:"Prathipa"
    })
}) 

app.get('/help',(req,res) => {
    res.render('help.hbs',{
        title:"Help",
        name:"Prathipa",
        msg:" Useful tips can be shown here"
    })
})  

app.get('/weather',(req,res) => {
    if(!req.query.address){
        return res.send({
            error:"Please enter the address"
        })
    }
    // Default object for object destructured can be done using {long,lat,location} = {}
    geoCode(req.query.address,(error,{long,lat,location} = {}) => {
        if(error){
        return res.send({error})
        } 
            
        weather(long,lat,(error,{summary,temperature,precipitation} = {}) => {
            if(error)
                return res.send({error})
            res.send({
                temperature,
                summary,
                precipitation,
                location,
                address:req.query.address
            })
            
        })
        
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404.hbs',{
        title:'404',
        name:'Prathipa',
        msg:"Help article not found"
    })
})

app.get('*',(req,res)=>{
    res.render('404.hbs',{
        title:'404',
        name:'Prathipa',
        msg:"Page not found"
    })
})

app.listen(3000,() => {
    console.log("Port is up and running 3000")
})