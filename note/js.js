const addBtn = document.querySelector("#add-btn")
const  mainAdd = document.querySelector("#main-add")

const headInput = document.querySelector("#head") 
const bodyInput = document.querySelector("#body")
const saveBtn = document.querySelector("#save")

const bodyBtn = document.querySelector("#bodySaved")
const headSaved = document.querySelector("#headSaved")

addBtn.addEventListener("click", () => {
    mainAdd.classList.toggle("activeAdd")
})

saveBtn.addEventListener("click", ()=> {
    mainAdd.classList.toggle("activeAdd")
    headSaved.innerText = headInput.value
    bodyBtn.innerText = bodyInput.value
})