

var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    for (let i = 0; i < tablinks.length; i++) {
        if (tablinks[i].getAttribute("onclick") === `opentab('${tabname}')`) {
            tablinks[i].classList.add("active-link");
        }
    }
}

var sMenu = document.getElementById("sidemenu");

function openmenu() {
    sMenu.style.right = "0";
}

function closemenu() {
    sMenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function() {
    var closeFunction = document.getElementById("closeFunction");
    if (closeFunction) {
        closeFunction.addEventListener("click", function() {
            sMenu.style.right = "-200px";
        });
    }
});