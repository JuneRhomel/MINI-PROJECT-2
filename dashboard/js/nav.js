const nav = document.querySelector(".top-nav")
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")


menu.addEventListener("click", () =>{
    nav.classList.toggle("active")
    nav.classList.toggle("activeNavPc")
    navigation.classList.toggle("activeMenuPc")
})