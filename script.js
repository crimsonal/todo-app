let notesFrame = document.getElementsByClassName("notes-frame")[0]
let openNotesBtn = document.getElementsByClassName("open-notes-btn")[0]
let closeNotesBtn = document.getElementsByClassName("close-notes-btn")[0]
let notesContainerMessage = document.getElementsByClassName("notes-container-message")[0]
let newNoteBtn = document.getElementsByClassName("new-note-btn")[0]
let editNoteBtn = document.getElementsByClassName("edit-note-btn")[0]
let deleteNoteBtn = document.getElementsByClassName("delete-note-btn")[0]
let noteEditor = document.getElementsByClassName("note-editor")[0]

let numNotes = 0
const notes = [];

function checkNotes() {
    if (numNotes == 0) {

    }
}
function load() {
    notesFrame.style.visibility = "hidden"
    noteEditor.style.visibility = "hidden"
    checkNotes()
}

function notesBtnClick() {
    if (notesFrame.style.visibility == "hidden") {
        notesFrame.style.visibility = "visible"
        openNotesBtn.style.visibility = "hidden"
    } else {
        notesFrame.style.visibility = "hidden"
        openNotesBtn.style.visibility = "visible"
    }
}

function newNote() {
    noteEditor.style.visibility = "visible"
    notesFrame.style.visibility = "hidden"
}

window.addEventListener("load", load)
console.log(openNotesBtn)
openNotesBtn.addEventListener("click", notesBtnClick)
closeNotesBtn.addEventListener("click", notesBtnClick)
newNoteBtn.addEventListener("click", newNote)
