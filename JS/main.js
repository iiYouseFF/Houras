const img = document.getElementById("img")
const list = document.getElementById("list")

window.addEventListener("scroll" , () => {
    const scrollY = window.scrollY;
    console.log(scrollY);
    // img.style.width = `200px` 
    img.style.transform = `translate( ${ scrollY * 0.5}% , ${scrollY * 0.1}%)`
    list.style.transform = `translateX( ${ scrollY * 0.04}%)`
})