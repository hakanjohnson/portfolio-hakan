const button = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

button.addEventListener("click", function() {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        button.classList.remove("active");
        document.documentElement.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
    }
    else {
        menu.classList.add("open");
        button.classList.add("active");
        document.documentElement.classList.add("no-scroll");
        document.body.classList.add("no-scroll");
    }
});

function closeMenu() {
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
    menu.classList.remove("open");
    button.classList.remove("active");

}

document.querySelectorAll("nav ul li a").forEach( a => {
    a.addEventListener("click", closeMenu);
});