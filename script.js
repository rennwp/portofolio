// LOADING
let welcome = document.getElementById("welcome");
let to = document.getElementById("to");
let wepe = document.getElementById("wepe");
let site = document.getElementById("site");
let isiseluruhweb = document.getElementById("isiseluruhweb");
let loading = document.getElementById("loading");

function fade(target){
    setTimeout(() => {
    target.classList.toggle("undisplay")
    setTimeout(() => {
        target.style.opacity = "1";
    }, 1);
    setTimeout(() => {
        target.style.opacity = "0";
    }, 1500);
    setTimeout(() => {
        target.classList.toggle("undisplay")
    }, 2100);
}, 1000);
}

fade(welcome);
setTimeout(() => {
    fade(to);
}, 2200);
setTimeout(() => {
    fade(wepe);
}, 4400);
setTimeout(() => {
    fade(site);
}, 6600);
setTimeout(() => {
    loading.classList.toggle("undisplay")
    isiseluruhweb.classList.toggle("undisplay")
    setTimeout(() => {
        isiseluruhweb.style.opacity = "1";
    }, 1);
}, 8800);




// Nav Muncul
let hamburger = document.getElementById("hamburger");
let navBurger = document.getElementById("navBurger");
let profile = document.getElementById("profile");
let cursor = document.getElementById("cursor");
let h1 = document.getElementById("h1");
let p = document.getElementById("p");
let explore = document.getElementById("explore");
let container = document.getElementById("container");
let project = document.getElementById("project");
let contact = document.getElementById("contact");

hamburger.addEventListener("click", function(){
    navBurger.classList.toggle("navBurgerClose")
    navBurger.classList.toggle("scroll");
});

window.addEventListener("scroll", function(){
    profile.style.marginTop = window.scrollY * -.3 + 300 + "px";
})

window.addEventListener("mousemove", function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    h1.style.top = -y / 30 + "px"
    h1.style.left = -x / 50 + 20 + "px"

    p.style.top = -y / 60 + "px"
    p.style.left = -x / 90 + 20 + "px"

    explore.style.top = -y / 90 + "px"
    explore.style.left = -x / 120 + 20 + "px"

    container.style.top = -y / 50 + "px"
    container.style.left = -x / 80 + 20 + "px"

    project.style.top = -y / 70 + "px"
    project.style.left = -x / 100 + 20 + "px"

    contact.style.top = -y / 20 + "px"
    contact.style.left = -x / 50 + 20 + "px"

})

window.addEventListener("click", function(){
    cursor.classList.toggle("white")
    setTimeout(function(){
        cursor.classList.toggle("white")
    },50)
});