const addBtn = document.querySelector("#add-btn")
const  mainAdd = document.querySelector("#main-add")

const headInput = document.querySelector("#head") 
const bodyInput = document.querySelector("#body")
const saveBtn = document.querySelector("#save")

const bodyBtn = document.querySelector("#bodySaved")
const headSaved = document.querySelector("#headSaved")


const textNote = document.querySelector(".text-note")

const errorI = document.querySelector("#error")
const errorhead = document.querySelector("#errorhead")

const d = new Date();
let time= d.getHours();

if (time > 12) {
    time =(` ${d.getHours()-12}:${ d.getUTCMinutes()} Pm`)
} else {
    time =(` ${d.getHours()-12}:${ d.getUTCMinutes()} Am`)
}

console.log(time)

addBtn.addEventListener("click", () => {
    mainAdd.classList.toggle("activeAdd")
    errorI.innerText = ""
    errorhead.innerText = ""
})

saveBtn.addEventListener("click", ()=> {
    appendtNote()
    errorFunction()
    box()
    clear()
})

const errorFunction  = () => {
    if (headInput.value.length <= 0 && bodyInput.value.length <= 0) {
        errorhead.innerText = "Enter text"
        errorI.innerText = "Enter text"
    } else {
        errorhead.innerText = ""
    }
    if (bodyInput.value.length <= 0) {
        errorI.innerText = "Enter text"
    } else {
        errorI.innerText = ""
    }
    
    if (headInput.value.length <= 0) {
        errorhead.innerText = "Enter text"
    } else {
        errorhead.innerText = ""
    }

}
const clear = () => { 
    bodyInput.value=""
    headInput.value = ""
}

const appendtNote = () => {
    let box = document.createElement("div")

    let h4 = document.createElement("h4")
    h4.textContent= headInput.value
    let pTag = document.createElement("p")
    pTag.textContent = bodyInput.value
    let dateAdd = document.createElement("i")
    dateAdd = d.toDateString() + time
    if (bodyInput.value.length > 0 ) {
        mainAdd.classList.toggle("activeAdd")
        textNote.append(box)
        box.append(h4)
        box.append(pTag)
        box.append(dateAdd)
        box.classList.add("box-note")
    } 
}
const box = ()=> {
    const boxNote = document.querySelectorAll(".box-note")

    boxNote.forEach(addEventListener("click",()=> {
        console.log("clik") 
    }))

}
