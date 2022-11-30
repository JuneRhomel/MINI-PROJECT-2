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