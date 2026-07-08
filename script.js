function welcomeCustomer() {
    alert("Welcome to Luxmzzy Luxury Hair Cut!");
}

welcomeCustomer();

function openingHours() {
    alert("We are open from 9:00 AM to 10:00 PM");
}

openingHours();

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

    document.body.classList.toggle("dark");

}

function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML =
        "🕒 " + now.toLocaleTimeString();

}

updateClock();          // Show the time immediately
setInterval(updateClock, 1000);

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;

        if(name === "" || email === ""){

            alert("Please fill in all required fields.");

            return;

        }

        alert("✅ Thank you, " + name + "! Your appointment request has been received.");

        bookingForm.reset();

    });

}

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element) => {

    observer.observe(element);

});

