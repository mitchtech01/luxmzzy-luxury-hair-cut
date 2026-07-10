// ============================
// LUXMZZY LUXURY HAIR CUT
// PROFESSIONAL SCRIPT.JS
// ============================

// LIVE clock

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    let now = new Date();

    let options = {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    clock.innerHTML = now.toLocaleTimeString("en-US", options);

}


// SCROLL EFFECT

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background="#000";

}else{

navbar.style.background="rgba(0,0,0,.75)";

}

});

// BACK TO TOP

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.onclick = function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}

// ==========================
// ANIMATED COUNTER
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* MOBILE MENU */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

});

