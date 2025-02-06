const img = document.getElementById("img")
const horas = document.getElementById("Horas")
const list = document.getElementById("list")
const section1 = document.getElementById("layer-1")
const section2 = document.getElementById("layer-2")
const content = document.getElementById("content")
const About = document.getElementById("About")

window.addEventListener("scroll" , () => {
    const scrollY = window.scrollY;
    console.log(scrollY);
    
    if (scrollY < 660) {
        img.style.transform = `translate( ${ scrollY * 0.53}% , ${scrollY * 0.1}%)`
        list.style.transform = `translateX( ${ scrollY * 0.04}%)`
    } else {
        img.style.transform = `translate( ${ 660 * 0.53}% , ${660 * 0.1}%)`
        list.style.transform = `translateX( ${ 660 * 0.04}%)`
    }
    if (scrollY == 0){
        About.style.opacity = '0'
        content.style.opacity ='1'
        section1.style.width = '100%'
        section2.style.width = '0%'
    }
    if (scrollY > 0 && scrollY <= 50 ) {
        About.style.opacity = '0.1'
        content.style.opacity ='0.9'
        section1.style.width = '90%'
        section2.style.width = '10%'
    }
    if (scrollY > 50 && scrollY <=100) {
        About.style.opacity = '0.2'
        content.style.opacity ='0.8'
        section1.style.width = '80%'
        section2.style.width = '20%'
    }
    if (scrollY > 100 && scrollY <=200) {
        About.style.opacity = '0.3'
        content.style.opacity ='0.7'
        section1.style.width = '70%'
        section2.style.width = '30%'
    }
    if (scrollY > 200 && scrollY <=300) {
        About.style.opacity = '0.5'
        content.style.opacity ='0.5'
        section1.style.width = '60%'
        section2.style.width = '40%'
    }
    if (scrollY > 300 && scrollY <=400) {
        About.style.opacity = '0.6'
        content.style.opacity ='0.4'
        section1.style.width = '40%'
        section2.style.width = '60%'
    }
    if (scrollY > 400 && scrollY <=500) {
        About.style.opacity = '0.8'
        content.style.opacity ='0.2'
        section1.style.width = '20%'
        section2.style.width = '80%'
    }
    if (scrollY > 500 && scrollY <=550) {
        About.style.opacity = '1'
        content.style.opacity ='0'
        section1.style.width = '0%'
        section2.style.width = '100%'
    }
    if (scrollY > 750 && scrollY <= 850) {
        section2.style.width = "80%"
        About.style.opacity = '0.9'
    }
    if (scrollY > 850 && scrollY <= 950) {
        section2.style.width = "60%"
        About.style.opacity = '0.6'
    }
    if (scrollY > 950 && scrollY <= 1050) {
        section2.style.width = "40%"
        About.style.opacity = '0.3'
    }
    if (scrollY > 1050 && scrollY <= 1150) {
        section2.style.width = "20%"
        About.style.opacity = '0.1'
    }
    if (scrollY > 1150 && scrollY <= 1250) {
        section2.style.width = "0%"
        About.style.opacity = '0'
    }
    });
img.addEventListener("mouseenter" , () =>{
    img.style.marginTop = "10px"
    horas.style.opacity = "1"
    horas.style.top = `0`
})
img.addEventListener("mouseleave" , () =>{
    img.style.marginTop = "0px"
    horas.style.opacity = "0"
    horas.style.top = `100%`
})