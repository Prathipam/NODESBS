const chalk = require('chalk')
const yargs = require('yargs')
        //console.log(process.argv)
// process.argv returns the following values
// 'C:\\Program Files\\nodejs\\node.exe', - Path where node is installed
// 'C:\\Users\\PRATHIPA\\Desktop\\node-apps\\challenge-3\\app.js', - Path where our app exist
//  'Prathipa' - argument that we passed while executing application like node app.js Prathipa

//console.log(yargs.argv)

//  node app.js add edit read --title="Yargs to read command" --msg = "My Message"
//It will parse the values and return the result
// { _: [ 'add', 'edit', 'read' ],  title: 'Yargs to read command',msg:'My Message'  '$0': 'app.js' }

//custom commands using yarg create, remove, list, read
//yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'Add the note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Title:'+argv.title)
        console.log('Body:'+argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove the note',
   
    handler: function(){
        console.log('Removing the Note',argv)
    }
})

yargs.command({
    command:'list',
    describe:'List the note',
    handler: function(){
        console.log('Listing the Note')
    }
})

yargs.command({
    command:'read',
    describe:'Read the note',
    handler: function(){
        console.log('Reading the Note')
    }
})

yargs.parse();