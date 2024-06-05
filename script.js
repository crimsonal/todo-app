let notesFrame = document.getElementsByClassName("notes-frame")[0]
let openNotesBtn = document.getElementsByClassName("open-notes-btn")[0]
let closeNotesBtn = document.getElementsByClassName("close-notes-btn")[0]



function load() {
    notesFrame.style.visibility = "hidden"
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
window.addEventListener("load", load)
console.log(openNotesBtn)
openNotesBtn.addEventListener("click", notesBtnClick)
closeNotesBtn.addEventListener("click", notesBtnClick)