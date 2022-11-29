const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');
const mainNav = document.querySelector(".main-nav")


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('burger-toggel');

    mainNav.classList.toggle("nav-bg")
    other.classList.toggle("diff")

    logotext.classList.toggle("logotext-scroll")
        spanText.classList.toggle("main-nav-scroll-text")

    layer.forEach((item)=> {
        item.classList.toggle('layer2')
    });
    layer2.forEach((color2)=>  {
        color2.classList.toggle('layer')
    });
    navLink.forEach((item)=> {
        item.classList.toggle("asd")
    });
})