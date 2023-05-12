let nav_ul=document.querySelector("#navbar")
document.querySelector(".menu-bar").onclick=()=>{
    nav_ul.classList.toggle("activation")
}

let search=document.querySelector(".search-input")

document.querySelector(".search-bar").onclick=()=>{
    search.classList.toggle("activate")
}