const body = document.querySelector("body");
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const menu_options = document.querySelectorAll(".navigation__link");
const scroll_progress_bar = document.querySelector(".scroll-progress");
const container_head = document.querySelector(".container-head");
const navigation__links = document.querySelectorAll('.navigation__link');

const btn_up = document.querySelector(".btn-up");

open_btn.addEventListener("click", () => {
    close_btn.classList.remove("hidden");
    overlay.classList.remove("hidden");
    overlay.classList.add("opened");
    menu.classList.remove("hidden");
    body.classList.add("no-scroll");

    menu_options.forEach((option) => {
        option.classList.add("opened");
    });
});

close_btn.addEventListener("click", close);

navigation__links.forEach((link) =>{
    link.addEventListener('click', close, false);
} )

function close() {
    close_btn.classList.add("hidden");
    overlay.classList.add("hidden");
    overlay.classList.remove("opened");
    menu.classList.add("hidden");
    body.classList.remove("no-scroll");

    menu_options.forEach((option) => {
        option.classList.remove("opened");
    });
}

function scrolled() {
    let scroll = document.documentElement.scrollTop;
    let height = container_head.clientHeight;

    let scrolled = (scroll / height) * 100;

    scroll_progress_bar.style.width = scrolled + "%";

    if (scrolled >= 100) {
        btn_up.style.opacity = 1;
        btn_up.style.visibility = "visible";
    } else {
        btn_up.style.opacity = 0;
        btn_up.style.visibility = "hidden";
    }
}

window.onscroll = () => {
    scrolled();
};

