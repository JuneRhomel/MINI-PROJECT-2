let progressBar = document.querySelector(".circular-progress")

let valueContainer = document.querySelector(".value-content");
let hours = document.querySelector("#hours")
let points = document.querySelector("#points")
let frontLoad = document.querySelector(".front")

let frontLoadStar = 0;
let frontLoadEnd = 50;
let pointsStart = 1100
let pointsEnd = 1150;

let hoursStart = 0
let hoursEnd = 50

let progressValue = 0
let progressEndValue = 100;

let speed = 50;
let progress = setInterval(() => {
    pointsStart++;
    progressValue++;
    hoursStart++;
    frontLoadStar++;

    if (frontLoadStar < frontLoadEnd) {
        frontLoad.style.width = `${frontLoadStar}%`;
    } 
    if (hoursStart <= hoursEnd) {
        hours.innerHTML= `${hoursStart} Hours`
        
        valueContainer.innerHTML = `${progressValue}%`
        progressBar.style.background = `conic-gradient(
            #FC7900 ${progressValue * 3.6}deg,
            #cadcff ${progressValue * 3.6}deg
        )`
    }
    if (pointsStart <= pointsEnd) {
        points.innerHTML= `${pointsStart}`
    }
    if (progressValue == progressEndValue) {
        clearInterval(progress)
    }


}, speed)




// note

const add = document.querySelector("#add")
const inputNoteBox = document.querySelector(".input-note")
const inputTask = document.querySelector("#inputTask")
const addBtn = document.querySelector("#add-btn")


// display input
add.addEventListener("click", ()=> {
    add.classList.toggle("rotate")
    inputNoteBox.classList.toggle("input-noteActive")
})


inputTask.addEventListener("keyup", (e)=> {
    // For Enter Key keyboard
    if (e.key == "Enter") {
        local()
    }
    
})

addBtn.addEventListener("click", () => {
    // for Btn
    local()
})

const local = ()=> {
    //set local storage 
    let localItem = JSON.parse(localStorage.getItem('localItem'))
    if (localItem === null) {
        //cheack if local storage is null if true store in null array else taskList store localItem
        taskList = []
    }else{
        taskList = localItem;
    }
    taskList.push(inputTask.value)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showlist()
}

const showlist = ()=> {
    let outPut = "";
    let taskListShow = document.querySelector(".save")

    let localItem = JSON.parse(localStorage.getItem('localItem'))
    if (localItem === null) {
        taskList = []
    }else{
        taskList = localItem;
    }
    taskList.forEach((data, index) => {
        outPut += `
        <div class="saveList">
            <p>${data}</p>
            <button onClick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>`
    });
    taskListShow.innerHTML = outPut;
}

showlist()
const deleteItem = (index) => {
    let localItem = JSON.parse(localStorage.getItem('localItem'))
    console.log(index)
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showlist()
}