let progressBar = document.querySelector(".circular-progress")

let valueContainer = document.querySelector(".value-content");
let hours = document.querySelector("#hours")
let points = document.querySelector("#points")


let pointsStart = 1150
let pointsEnd = 1200;

let hoursStart = 0
let hoursEnd = 1000

let progressValue = 0
let progressEndValue = 60;

let speed = 30;
let progress = setInterval(() => {
    pointsStart++;
    progressValue++;
    hoursStart++;

    points.innerHTML= `${pointsStart}`
    hours.innerHTML= `${hoursStart} Hours`
    valueContainer.innerHTML = `${progressValue}%`
    progressBar.style.background = `conic-gradient(
        #FC7900 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`

    if (pointsStart == pointsEnd) {
        clearInterval(progress)
    }
    if (progressValue == progressEndValue) {
        clearInterval(progress)
    }
    if (hoursStart == hoursEnd) {
        clearInterval(progress)
    }


}, speed)