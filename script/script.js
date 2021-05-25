const body = document.querySelector("body");
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const menu_options = document.querySelectorAll(".navigation__link");
const scroll_progress_bar = document.querySelector(".scroll-progress");
const container_head = document.querySelector(".container-head");
const navigation__links = document.querySelectorAll(".navigation__link");
const arrow_down = document.querySelector(".arrow");
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

navigation__links.forEach((link) => {
    link.addEventListener("click", close, false);
});

arrow_down.addEventListener("click", () => {
    removeActive();
    navigation__links[1].classList.add("active");
});

function setActiveLink() {
    removeActive(this);

    this.classList.add("active");
}

function removeActive(ele = null) {
    navigation__links.forEach((link) => {
        if (ele !== link) {
            link.classList.remove("active");
        }
    });
}

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

// display the scroll progress
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

    setActive(scrolled, height);
}

//sets class to links
function setActive(scrolled_val, height) {
    const scrollPadding = window.getComputedStyle(
        document.documentElement
    ).scrollPaddingTop;

    const paddingTop = scrollPadding.slice(0, scrollPadding.indexOf("px"));

    const about = document.querySelector(".about-me");
    const project = document.querySelector(".projects");
    const contact = document.querySelector(".container-foot");

    const home = navigation__links[0];
    const aboutSection = navigation__links[1];
    const projectSection = navigation__links[2];
    const contactSection = navigation__links[3];

    const s = parseInt(scrolled_val);

    const aboutStart = calcPosPerc(about.offsetTop, paddingTop, height);
    const projectStart = calcPosPerc(project.offsetTop, paddingTop, height);
    const contactStart = calcPosPerc(contact.offsetTop, paddingTop, height);

    removeActive();

    if (s < aboutStart) {
        addClassActive(home);

        return;
    }
    if (s >= aboutStart && s < projectStart) {
        addClassActive(aboutSection);

        return;
    }
    if (s >= projectStart && s < contactStart) {
        addClassActive(projectSection);

        return;
    }
    if (s >= contactStart) {
        addClassActive(contactSection);
        return;
    }
}

function addClassActive(element) {
    element.classList.add("active");
}

function calcPosPerc(offSet, padding, height) {
    return Number.parseInt(((offSet - padding) / height) * 100);
}

window.addEventListener("scroll", scrolled);
