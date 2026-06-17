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