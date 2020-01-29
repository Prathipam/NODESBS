const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(title){
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.green.inverse("Note Found"))
        console.log("Title:"+ note.title)
        console.log("Body:"+ note.body)
    }
    else{
        console.log(chalk.red.inverse("Note not Found"))
    }
}

 const addNotes = (title,body) => {
    const notes = loadNotes()

    //Filter method checks the entire array and returns the subset of the array
    // const duplicateNote = notes.filter((note) => {
    //     return note.title === title
    // })

    //Find Method stop searching when it finds the first match in the array. No match returns undefined

    const duplicateNote = notes.find((note) => {
        return note.title === title
    })
    // used to stop the execution  of the application and inspect the values
    // node inspect app.js command should be used to inspect the values
    // Chrome -> chrome://inspect to inspect the values in chrome browser
    // enter restart in the terminal to restart the debugging

    debugger
         if(!duplicateNote){
            notes.push({
                title:title,
                body:body
            })
            saveNotes(notes)
            console.log(chalk.green.inverse("Note is added"))
        }
        else{
            console.log(chalk.red.inverse("Note already existed"))
        }
}

 const removeNotes =  (title)=>{
    const notes = loadNotes()
    const newNotes = notes.filter((note) =>{
        return note.title !== title       
    })

    if(notes.length > newNotes.length){
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note is removed'))
    }
    else{
        console.log(chalk.red.inverse('No note found'))
    }
}
const listNotes =  ()=>{
    const notes = loadNotes()
    console.log(chalk.green.inverse("Your Notes"))
    notes.forEach(element => {
        console.log(chalk.greenBright.inverse(element.title))
    });
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON  = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}

module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes
}