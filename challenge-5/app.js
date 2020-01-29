const yargs = require('yargs')
const utils = require('./utils.js')
yargs.command({
    command:'add',
    describe:'Adding a Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        utils.addNotes(argv.title,argv.body)
    }
})


yargs.command({
    command:'remove',
    describe:'Removing a Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        
    },
    handler(argv){
        utils.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Listing a Note',
 
    handler(){
        utils.listNotes()
    }
})

yargs.command({
    command:'get',
    describe:'Get a Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        
    },
    handler(argv){
        utils.getNotes(argv.title)
    }
})
yargs.parse();