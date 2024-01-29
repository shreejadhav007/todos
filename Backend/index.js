const main = require("./db");
const express  = require('express');
const cors = require('cors');
const notes = require("./Models/Notes");
const note = require("./Models/Notes");
const { useState } = require("react");


const app = express();
const port = 3001;
main()
app.use(express.json());
app.use(cors());


app.post('/addNote',async(req,res)=>{

const {text,date,priority,a} = req.body

const note =await notes.create({note:text,username:a,date:date,status:"false",priority:priority})

    // console.log(note)
})

app.post('/showNotes',async(req,res)=>{
    const user = req.body.username
    console.log(user) 
    const shownote= await note.find({username:user})
    res.send(shownote) 
    console.log(shownote)
})

app.delete('/deletenote/:id',async(req,res)=>{
    const id = req.params.id
    console.log(req.params.id)
    
    const deletenote = await notes.findByIdAndDelete(id)
    console.log(deletenote)
    res.send(deletenote)

})

app.put('/updatestatus/:id',async(req,res)=>{
    const status = !req.body.status
    const id = req.params.id
    console.log(status)

    const updatednote = await notes.findByIdAndUpdate(id,{status:status})
    console.log(updatednote)
})

app.post('/filternotes',async(req,res)=>{
    const filter = req.body.filters

    if(filter=="Complete"){
        const filterNote = await notes.find({status:true})
        res.send(filterNote)
    }
    if(filter=="Incomplete"){
        const filterNote = await notes.find({status:false})
        res.send(filterNote)
    }
    if(filter=="all"){
        const filterNote = await notes.find()
        res.send(filterNote)
    }


})

app.listen(port,()=>{console.log("the server is live");})
