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

/* CHATBOT START */
document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("chat-btn");
    const box = document.getElementById("chat-box");

    if (!toggle || !box) {
        console.error("Chat button or chat box not found!");
        return;
    }

    toggle.addEventListener("click", function () {

        if (box.style.display === "block") {
            box.style.display = "none";
        } else {
            box.style.display = "block";

            if (
                document.getElementById("chat-messages").innerHTML.trim() === ""
            ) {
                showMainMenu();
            }
        }

    });

});

function message(text){

    const messages =
    document.getElementById("chat-messages");

    messages.innerHTML = `
        <div class="bot-msg">
            ${text}
        </div>
    `;


    messages.scrollTop =
    messages.scrollHeight;
}

function options(btns) {

    let html = "";

    btns.forEach(btn => {

        html += `
        <button
            class="option-btn"
            onclick="${btn.action}">
            ${btn.text}
        </button>
        `;
    });

    document.getElementById("chat-options").innerHTML = html;
}

function showMainMenu() {

    message(`
👋 Hello! Welcome to TravelTourWings.

I'm your travel assistant.

I can help you with:

🌊 Vizag Tours
🌄 Araku Packages
❄️ Lambasingi Trips
🚗 Car Rentals

Please select a service below.
`);

    options([
        { text: "🌊 Vizag Tours", action: "vizagMenu()" },
        { text: "🌄 Araku Tours", action: "arakuMenu()" },
        { text: "❄️ Lambasingi Tours", action: "lambasingiMenu()" },
        { text: "🚗 Car Rentals", action: "carMenu()" },
        { text: "📞 Contact Us", action: "contactMenu()" }
    ]);
}

function vizagMenu() {

    message(`
        🌊 Vizag Tour Packages
        <br><br>
        Select an option:
    `);

    options([
        { text: "📍 Tourist Places", action: "VizagPlaces()" },
        { text: "💰 Package Details", action: "packageInfo()" },
        { text: "📅 Book Vizag Tour", action: "contactMenu()" }
    ]);
}

function VizagPlaces() {

    message(`
        🏖 RK Beach<br>
        🚢 INS Kursura Museum<br>
        ✈ TU-142 Museum<br>
        🚁 Helicopter Museum<br>
        🌊 Rushikonda Beach<br>
        ⛰ Kailasagiri<br>
        🌉 Glass Bridge<br>
        🙏 Simhachalam Temple<br>
        🌅 Dolphin's Nose<br>
        🏝 Yarada Beach<br>
        🐘 Zoo Park<br>
        🌳 Kambalakonda<br>
        🏰 Bheemili Beach<br>
        ☕ Totlakonda<br>
        🌄 Ross Hill
    `);

    options([
        { text: "📅 Book Vizag Tour", action: "contactMenu()" },
        { text: "⬅ Main Menu", action: "showMainMenu()" }
    ]);
}

function arakuMenu() {

    message(`
        🌄 Araku Valley Tour
        <br><br>
        🚂 Railway Journey<br>
        ☕ Coffee Museum<br>
        🕳 Borra Caves<br>
        🌿 Tribal Museum<br>
        🌄 Padmapuram Gardens
    `);

    options([
        { text: "📅 Book Araku Tour", action: "contactMenu()" },
        { text: "⬅ Main Menu", action: "showMainMenu()" }
    ]);
}

function lambasingiMenu() {

    message(`
        ❄️ Lambasingi Tour
        <br><br>
        🌄 Sunrise Point<br>
        🌲 Pine Forest<br>
        ☁ Fog View Point<br>
        🌿 Nature Views
    `);

    options([
        { text: "📅 Book Lambasingi Tour", action: "contactMenu()" },
        { text: "⬅ Main Menu", action: "showMainMenu()" }
    ]);
}

function carMenu() {

    message(`
        🚗 Available Vehicles
        <br><br>
        🚘 Swift Dzire<br>
        🚙 Ertiga<br>
        🚐 Innova<br>
        🚌 Tempo Traveller
    `);

    options([
        { text: "📞 Contact For Pricing", action: "contactMenu()" },
        { text: "⬅ Main Menu", action: "showMainMenu()" }
    ]);
}

function packageInfo() {

    message(`
        💰 Package Cost Depends On:
        <br><br>
        ✔ Number of People
        <br>
        ✔ Vehicle Type
        <br>
        ✔ Tour Duration
        <br>
        ✔ Hotel Requirements
    `);

    options([
        { text: "📞 Get Quote", action: "contactMenu()" },
        { text: "⬅ Main Menu", action: "showMainMenu()" }
    ]);
}

function contactMenu() {

    message(`
        📞 Call Us: 9959427831
        <br><br>

        💬 WhatsApp:
        <br>

        <a href="https://wa.me/919959427831" target="_blank">
            Click Here
        </a>
    `);

    console.log("Main menu loaded");

    options([
        { text: "⬅ Main Menu", action: "showMainMenu()" }
    ]);
}

/* CHATBOT END */