const fs = require('fs')

// Read the JSON data from the file which returns the binary data
const dataBuffer = fs.readFileSync('data.json')

// Convert the binary data into JSON using toString method
const dataJSON = dataBuffer.toString()

// Convert the JSON string into object
const data = JSON.parse(dataJSON)

// Update the name and age property
data.name = 'Prathipa'
data.age = 33

// Convert the updated data into JSON and overwrite the data in the file
const myData = JSON.stringify(data);
fs.writeFileSync('data.json',myData)