let notesFrame = document.getElementsByClassName("notes-frame")[0]
let openNotesBtn = document.getElementsByClassName("open-notes-btn")[0]
let closeNotesBtn = document.getElementsByClassName("close-notes-btn")[0]
let notesContainerMessage = document.getElementsByClassName("notes-container-message")[0]
let newNoteBtn = document.getElementsByClassName("new-note-btn")[0]
let editNoteBtn = document.getElementsByClassName("edit-note-btn")[0]
let deleteNoteBtn = document.getElementsByClassName("delete-note-btn")[0]
let viewNoteBtn = document.getElementsByClassName("view-note-btn")[0]
let discardNoteBtn = document.getElementsByClassName("discard-note-btn")[0]
let saveNoteBtn = document.getElementsByClassName("save-note-btn")[0]
let discardNoteBtnIcon = document.getElementsByClassName("discard-note-btn-icon")[0]
let deleteNoteBtnIcon = document.getElementsByClassName("delete-note-btn-icon")[0]
let noteEditor = document.getElementsByClassName("note-editor")[0]
let notepad = document.getElementById("notepad")
let notesContainer = document.getElementsByClassName("notes-container")[0]


let numNotes = 0
let index = 0
let selectedNote = null
let editing = false
let previewCharacterCount = 9
const notes = [];

function checkNotes() {
    if (numNotes == 0) {

    }
}

function toolbarToggle(editBtn, deleteBtn) {
    if (editBtn) {
        editNoteBtn.classList.add("toolbar-button")
        editNoteBtn.classList.remove("toolbar-button-disabled")
    } else {
        editNoteBtn.classList.add("toolbar-button-disabled")
        editNoteBtn.classList.remove("toolbar-button")
    }
    if (deleteBtn) {
        deleteNoteBtn.classList.add("toolbar-button")
        deleteNoteBtn.classList.remove("toolbar-button-disabled")
    } else {
        deleteNoteBtn.classList.add("toolbar-button-disabled")
        deleteNoteBtn.classList.remove("toolbar-button")
    }
}
function load() {
    notesFrame.style.visibility = "hidden"
    noteEditor.style.visibility = "hidden"

    editNoteBtn.classList.add("toolbar-button-disabled")
    editNoteBtn.classList.remove("toolbar-button")

    deleteNoteBtn.classList.add("toolbar-button-disabled")
    deleteNoteBtn.classList.remove("toolbar-button")

    viewNoteBtn.classList.add("toolbar-button-disabled")
    viewNoteBtn.classList.remove("toolbar-button")
    
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
    notepad.value = ""
}

function closePrompt() {
    noteEditor.style.visibility = "hidden"
    notesFrame.style.visibility = "visible" 
    editing = false
    deselectNote()
}

function deselectNote() {
    if (selectedNote == null) {
        console.log("selected note is null")
        return
    }
    selectedNote.classList.remove("selected-note-border")
    selectedNote = null 
    toolbarToggle(false, false)
}


function selectNote(e) {
    let target = e.target 
    if (target == selectedNote) {
        // deselect note
        deselectNote()
        
    } else {
        
        if (selectedNote != null) {
            selectedNote.classList.remove("selected-note-border")
        }
        selectedNote = target
        target.classList.add("selected-note-border")
        toolbarToggle(true, true)
       
        
    }
}
function addNote() {
    if (notepad.value.trim().length == 0) { // check for whitespace
        return
    }
    
    if (editing) {
        selectedNote.innerHTML = notepad.value.substring(0, previewCharacterCount) + ".."
        notes[index] = notepad.value
        editing = false
        deselectNote()
    } else {
        var newNote = document.createElement("div")
        newNote.id = "note" + numNotes 
        newNote.className = "note"
        newNote.innerHTML = notepad.value.substring(0, previewCharacterCount) + ".."
        notesContainer.appendChild(newNote)
        notesContainerMessage.style.display = "none"
        numNotes++
        newNote.addEventListener("click", selectNote)
        notes.push(notepad.value)
        
    }
    closePrompt()
    notepad.value = ""

}


function cancelNote(e) {
    if (e.target == noteEditor || e.target == discardNoteBtn || e.target == discardNoteBtnIcon) {
        closePrompt()
    }
}




function editNote() {
    if (selectedNote == null) {
        return                                                                                        
    }
    editing = true
    newNote()
    notepad.value = notes[getIndex()]
}

function isClickable(obj) {
    if (obj.classList.contains("button") || obj.classList.contains("note") || obj.classList.contains("toolbar-icon")) {
        return true
    }
    return false
}

function windowClick(e) {
    // handles deselection of a note when user clicks on a non-button
    let target = e.target
    if (!isClickable(target)) { // not a clickable element
        if (!editing) {
            deselectNote()
        }
    }
}

function getIndex() {
    return Number(selectedNote.id.substring(4))
}

function deleteNote() {
    if (selectedNote != null) {
        let index = getIndex() 
        let notes2 = document.getElementsByClassName("note")
        for (let i = index+1; i < notes2.length; i++) { // decrement notes that are ahead
            notes2[i].id = "note" + (i - 1)
        }
        notesContainer.removeChild(notes2[index])
        notes.splice(index, 1)
        deselectNote()
        
        
    }
}

// events

window.addEventListener("load", load)
openNotesBtn.addEventListener("click", notesBtnClick)
closeNotesBtn.addEventListener("click", notesBtnClick)
newNoteBtn.addEventListener("click", newNote)
noteEditor.addEventListener("click", cancelNote)
discardNoteBtn.addEventListener("click", cancelNote)
saveNoteBtn.addEventListener("click", addNote)
editNoteBtn.addEventListener("click", editNote)
window.addEventListener("click", windowClick)
deleteNoteBtn.addEventListener("click", deleteNote)
deleteNoteBtnIcon.addEventListener("click", deleteNote)

