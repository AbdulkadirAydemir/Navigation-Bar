const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

let getMode = localStorage.getItem("mode");

if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

//? Karanlık ve Aydınlık mod Yapısı

modeToggle.addEventListener("click" , () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode" , "light-mode")
    } else {
        localStorage.setItem("mode" , "dark-mode")
    }
});

//TODO: Search box 

searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

//TODO: Sidebar

sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active")
});

body.addEventListener("click", e => {
    let clicked = e.target;

    if (!clicked.classList.contains("sidebarOpen") && !clicked.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});
