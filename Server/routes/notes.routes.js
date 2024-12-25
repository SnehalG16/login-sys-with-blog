const express=require("express")
const isAuth = require("../middleware/AUth")

const { createNotes, deleteNotes, GetAllNotesByUser, GetSingleNoteByUser, updateNote } = require("../controllers/notes.controler")

const notesRouter= express.Router()

notesRouter.post("/create",isAuth,createNotes)

// delete notes
notesRouter.delete("/delate/:notesId",isAuth,deleteNotes)
    
// Get ALl notes of user
notesRouter.get("/getallnotes/:userId",isAuth,GetAllNotesByUser)

// single notes by user
notesRouter.get("/getsinglenote/:notesId",isAuth,GetSingleNoteByUser)

// update note
notesRouter.patch("/updatenote/:notesId",isAuth,updateNote)

module.exports=notesRouter