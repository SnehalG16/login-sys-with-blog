
const notesModel = require("../models/notes.model")
const userModel = require("../models/user.model")

// create notes
const createNotes = async (req, res) => {
    const { title, body } = req.body

    if (!title || !body) {
        res.status(400).json({ message: "title and body is reuired for create note" })
    }
    try {
        await notesModel.create({ title, body, userId: req.user._id })
        res.status(200).json({ message: 'notes created successfully' })
    } catch (error) {
        console.log(error)
        res.json({ message: error })
    }
}

// delate note by user
const deleteNotes = async (req, res) => {
    console.log("delete parameter", req.params)
    const { notesId } = req.params
    const isExistNotes = await notesModel.findById(notesId)
    // console.log("isExistNotes:", isExistNotes.userId)
    // console.log("user id from database to check userid of notes user and actual user:", req.use)
    if (!isExistNotes) {
        res.status(400).json({ message: "notes not found" })
    }
    if (isExistNotes.userId != req.user._id) {
        res.status(400).json({ message: "you can not delete this note" })
    }

    await notesModel.findByIdAndDelete(notesId)
    res.status(200).json({ message: 'notes Delated successfully' })

}

// get notes by user
const GetAllNotesByUser = async (req, res) => {
    const { userId } = req.params
    // console.log("GetAllNotesByUser: " ,userId)
    try {
        if (userId != req.user._id) {
            return res.status(200).json({ message: "you dont permisson to view this notes" })
        }
        const allUserNotes = await notesModel.find({ userId: userId })
        if (!allUserNotes) {
            res.status(400).json({ message: "no notes found" })
        }
        res.status(200).json({ allUserNotes })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

// get single note of user
const GetSingleNoteByUser = async (req, res) => {
    const { notesId } = req.params;
    const isExistNotes = await notesModel.findById(notesId)
    try {
        if (!isExistNotes) {
            res.status(400).json({ message: "notes not found" })
        }
        if (isExistNotes.userId != req.user._id) {
            res.status(400).json({ message: "you can not view this note" })
        }

        res.status(200).json({ notes: isExistNotes })

    } catch (error) {
        res.status(400).json({ message: error })
    }

}

// update notes
const updateNote = async (req, res) => {
    const { notesId } = req.params

    // for usrerdata
    // console.log("update note's id", req.user)

    // notes information
    const notesData = await notesModel.findById(notesId)

    console.log("notesdata which i want to update....   ", notesData)

}

module.exports = { createNotes, deleteNotes, GetAllNotesByUser, GetSingleNoteByUser, updateNote }