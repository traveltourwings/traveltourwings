function setTheme(mode) {

    if (mode === "dark") {
        document.body.classList.add("dark-mode");
    }

    else if (mode === "light") {
        document.body.classList.remove("dark-mode");
    }

    else if (mode === "auto") {

        const hour = new Date().getHours();

        if (hour >= 18 || hour < 6) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }
}

const toggle = document.getElementById("chat-toggle");
const box = document.getElementById("chat-box");

toggle.onclick = () => {
    box.style.display =
    box.style.display === "block" ? "none" : "block";

    if(document.getElementById("chat-messages").innerHTML === ""){
        showMainMenu();
    }
};

function message(text){
    document.getElementById("chat-messages").innerHTML +=
    `<div class="bot-msg">${text}</div>`;
}

function options(btns){
    let html = "";

    btns.forEach(btn=>{
        html += `<button class="option-btn"
        onclick="${btn.action}">
        ${btn.text}
        </button>`;
    });

    document.getElementById("chat-options").innerHTML = html;
}

function showMainMenu(){

    message("👋 Welcome to TravelTourWings<br><br>Select a service:");

    options([
        {text:"🌊 Vizag Tours", action:"VizagMenu()"},
        {text:"🌄 Araku Tours", action:"arakuMenu()"},
        {text:"❄️ Lambasingi Tours", action:"lambasingiMenu()"},
        {text:"🚗 Car Rentals", action:"carMenu()"},
        {text:"📞 Contact Us", action:"contactMenu()"}
    ]);
}

function vizagMenu(){

    message("🌊 Vizag Tours");

    options([
        {text:"📍 Tourist Places", action:"VizagPlaces()"},
        {text:"💰 Package Details", action:"packageInfo()"},
        {text:"📅 Book Now", action:"contactMenu()"}
    ]);
}

function VizagPlaces(){

    message(`
    🏖 RK Beach<br>
    ⛰ Kailasagiri<br>
    🏄 Rushikonda<br>
    🙏 Simhachalam<br>
    🌅 Dolphin's Nose<br>
    🌉 Glass Bridge
    `);

    options([
        {text:"📅 Book Vizag Tour", action:"contactMenu()"},
        {text:"⬅ Main Menu", action:"showMainMenu()"}
    ]);
}

function arakuMenu(){

    message(`
    🌄 Araku Valley<br><br>
    🚂 Railway Journey<br>
    ☕ Coffee Museum<br>
    🕳 Borra Caves<br>
    🌿 Tribal Museum
    `);

    options([
        {text:"📅 Book Araku Tour", action:"contactMenu()"},
        {text:"⬅ Main Menu", action:"showMainMenu()"}
    ]);
}

function lambasingiMenu(){

    message(`
    ❄️ Lambasingi<br><br>
    🌄 Sunrise Point<br>
    🌲 Pine Forest<br>
    ☁️ Fog View Point
    `);

    options([
        {text:"📅 Book Lambasingi Tour", action:"contactMenu()"},
        {text:"⬅ Main Menu", action:"showMainMenu()"}
    ]);
}

function carMenu(){

    message(`
    🚗 Available Vehicles<br><br>
    🚘 Swift Dzire<br>
    🚙 Ertiga<br>
    🚐 Innova<br>
    🚌 Tempo Traveller
    `);

    options([
        {text:"📞 Contact for Pricing", action:"contactMenu()"},
        {text:"⬅ Main Menu", action:"showMainMenu()"}
    ]);
}

function packageInfo(){

    message(`
    💰 Package prices vary based on:
    <br>✔ Number of People
    <br>✔ Vehicle Type
    <br>✔ Duration
    `);

    options([
        {text:"📞 Get Quote", action:"contactMenu()"},
        {text:"⬅ Main Menu", action:"showMainMenu()"}
    ]);
}

function contactMenu(){

    message(`
    📞 Call: 9959427831
    <br><br>
    💬 WhatsApp:
    <br>
    <a href="https://wa.me/919959427831" target="_blank">
    Click Here
    </a>
    `);

    options([
        {text:"⬅ Main Menu", action:"showMainMenu()"}
    ]);
}