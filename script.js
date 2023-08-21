document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle-checkbox");
    const switchInner = document.querySelector(".switch-inner");
    const body = document.body;

    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            switchInner.style.transform = "translateX(20px)";
            body.classList.add("dark-theme");
            body.classList.remove("light-theme");
        } else {
            switchInner.style.transform = "translateX(0)";
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        }
    });
});
