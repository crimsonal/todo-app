let notesFrame = document.getElementsByClassName("notes-frame")[0]
let openNotesBtn = document.getElementsByClassName("open-notes-btn")[0]
let closeNotesBtn = document.getElementsByClassName("close-notes-btn")[0]
let notesContainerMessage = document.getElementsByClassName("notes-container-message")[0]
let newNoteBtn = document.getElementsByClassName("new-note-btn")[0]
let editNoteBtn = document.getElementsByClassName("edit-note-btn")[0]
let deleteNoteBtn = document.getElementsByClassName("delete-note-btn")[0]
let discardNoteBtn = document.getElementsByClassName("discard-note-btn")[0]
let saveNoteBtn = document.getElementsByClassName("save-note-btn")[0]
let discardNoteBtnIcon = document.getElementsByClassName("discard-note-btn-icon")[0]
let noteEditor = document.getElementsByClassName("note-editor")[0]
let notepad = document.getElementById("notepad")
let notesContainer = document.getElementsByClassName("notes-container")[0]


let numNotes = 0
let selectedNote = null
const notes = [];

function checkNotes() {
    if (numNotes == 0) {

    }
}
function load() {
    notesFrame.style.visibility = "hidden"
    noteEditor.style.visibility = "hidden"
    editNoteBtn.classList.add("toolbar-button-disabled")
    editNoteBtn.classList.remove("toolbar-button")
    deleteNoteBtn.classList.add("toolbar-button-disabled")
    deleteNoteBtn.classList.remove("toolbar-button")
    
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

function closePrompt() {
    noteEditor.style.visibility = "hidden"
    notesFrame.style.visibility = "visible" 
}

function selectNote() {
    
}
function addNote() {
    if (notepad.value.trim().length == 0) { // check for whitespace
        return
    }
       
    var newNote = document.createElement("div")
    newNote.id = "note" + numNotes 
    newNote.className = "note"
    newNote.innerHTML = notepad.value.substring(0, 9) + ".."
    notesContainer.appendChild(newNote)
    notesContainerMessage.style.display = "none"
    numNotes++
    closePrompt()
    newNote.addEventListener("click", selectNote)
}


function cancelNote(e) {
    if (e.target == noteEditor || e.target == discardNoteBtn || e.target == discardNoteBtnIcon) {
        closePrompt()
    }
}

window.addEventListener("load", load)
openNotesBtn.addEventListener("click", notesBtnClick)
closeNotesBtn.addEventListener("click", notesBtnClick)
newNoteBtn.addEventListener("click", newNote)
noteEditor.addEventListener("click", cancelNote)
discardNoteBtn.addEventListener("click", cancelNote)
saveNoteBtn.addEventListener("click", addNote)