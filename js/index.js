
const navigation = document.querySelector("#navigation")
const layer = document.querySelectorAll(".layer")
const layer2 = document.querySelectorAll(".layer2")
const other = document.querySelector(".other")
const logotext = document.querySelector(".logotext")
const spanText = document.querySelector(".span-text")
const navLink = document.querySelectorAll(".navLink")

console.log(navLink)
window.addEventListener("scroll", () => {
    // console.log(window.scrollY)

    if (window.scrollY >= 413) {
        navigation.classList.add("main-nav-scroll");
        
        logotext.classList.add("logotext-scroll")
        spanText.classList.add("main-nav-scroll-text")

        other.classList.add("diff")
        layer.forEach((item)=> {
            item.classList.add('layer2')
        });
        layer2.forEach((color2)=>  {
            color2.classList.add('layer')
        });
        navLink.forEach((item)=> {
            item.classList.add("asd")
        });
    }

    if (window.scrollY > 0 && window.scrollY <= 412) {
        navigation.classList.remove("main-nav-scroll")

        logotext.classList.remove("logotext-scroll")
        spanText.classList.remove("main-nav-scroll-text")

        layer.forEach((color) => {color.classList.remove('layer2')});
        layer2.forEach((color2)=> { item.classList.remove('layer')});
        other.classList.remove("diff")
        navLink.forEach((item)=> {
            item.classList.remove("asd")
        });
    }

    if (window.scrollY >= 7227) {
        navigation.classList.remove("main-nav-scroll")

        logotext.classList.remove("logotext-scroll")
        spanText.classList.remove("main-nav-scroll-text")

        layer.forEach((color) => {color.classList.remove('layer2')});
        layer2.forEach((color2)=> { item.classList.remove('layer')});
        other.classList.remove("diff")
        navLink.forEach((item)=> {
            item.classList.remove("asd")
        });
    }
})