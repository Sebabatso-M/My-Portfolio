const body = document.querySelector('body');
const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const menu_options = document.querySelectorAll('.navigation__link');
const scroll_progress_bar = document.querySelector('.scroll-progress');
const container_head = document.querySelector('.container-head');
const navigation__links = document.querySelectorAll('.navigation__link');
const btn_up = document.querySelector('.btn-up');

open_btn.addEventListener('click', () => {
    close_btn.classList.remove('hidden');
    overlay.classList.remove('hidden');
    overlay.classList.add('opened');
    menu.classList.remove('hidden');
    body.classList.add('no-scroll');

    menu_options.forEach((option) => {
        option.classList.add('opened');
    });
});

close_btn.addEventListener('click', close);

navigation__links.forEach((link) => {
    link.addEventListener('click', close, false);
});

function setActiveLink() {
    removeActive(this);

    this.classList.add('active');
}

function removeActive(ele = null) {
    navigation__links.forEach((link) => {
        if (ele !== link) {
            link.classList.remove('active');
        }
    });
}

function close() {
    close_btn.classList.add('hidden');
    overlay.classList.add('hidden');
    overlay.classList.remove('opened');
    menu.classList.add('hidden');
    body.classList.remove('no-scroll');

    menu_options.forEach((option) => {
        option.classList.remove('opened');
    });
}

// display the scroll progress
function scrolled() {
    let scroll = document.documentElement.scrollTop;
    let height = container_head.clientHeight;

    let scrolled = (scroll / height) * 100;

    scroll_progress_bar.style.width = scrolled + '%';

    if (scrolled >= 100) {
        btn_up.style.opacity = 1;
        btn_up.style.visibility = 'visible';
    } else {
        btn_up.style.opacity = 0;
        btn_up.style.visibility = 'hidden';
    }

    setActive(scrolled, height);
}

//sets class to links
function setActive(scrolled_val, height) {
    const scrollPadding = window.getComputedStyle(
        document.documentElement
    ).scrollPaddingTop;

    const paddingTop = scrollPadding.slice(0, scrollPadding.indexOf('px'));

    const about = document.querySelector('.about-me');
    const skills = document.querySelector('.skills');
    const project = document.querySelector('.projects');
    const contact = document.querySelector('.container-foot');

    const home = navigation__links[0];
    const aboutSection = navigation__links[1];
    const skillsSection = navigation__links[2];
    const projectSection = navigation__links[3];
    const contactSection = navigation__links[4];

    const s = parseInt(scrolled_val);

    const aboutStart = calcPosPerc(about.offsetTop, paddingTop, height);
    const skillsStart = calcPosPerc(skills.offsetTop, paddingTop, height);
    const projectStart = calcPosPerc(project.offsetTop, paddingTop, height);
    const contactStart = calcPosPerc(contact.offsetTop, paddingTop, height);

    removeActive();

    if (s < aboutStart) {
        addClassActive(home);

        return;
    }
    if (s >= aboutStart && s < skillsStart) {
        addClassActive(aboutSection);

        return;
    }

    if (s >= skillsStart && s < projectStart) {
        addClassActive(skillsSection);

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
    element.classList.add('active');
}

function calcPosPerc(offSet, padding, height) {
    return Number.parseInt(((offSet - padding) / height) * 100);
}

window.addEventListener('scroll', scrolled);

/*******************
 *   FORM VALIDATION
 *******************/
const form = document.querySelector('.contact-form');
const name_input = document.querySelector('#name');
const email_input = document.querySelector('#email');
const message_input = document.querySelector('#message');

function addErrorClass(element) {
    element.classList.add('error');
}

function addSuccessClass(element) {
    element.classList.add('success');
}
function addGoodClass(element) {
    const label = element.nextElementSibling;
    label.classList.add('good');
}
function addBadClass(element) {
    const label = element.nextElementSibling;
    label.classList.add('bad');
}
function removeErrorClass(element) {
    element.classList.remove('error');
}

function removeSuccessClass(element) {
    element.classList.remove('success');
}

function removeGoodClass(element) {
    const label = element.nextElementSibling;
    label.classList.remove('good');
}
function removeBadClass(element) {
    const label = element.nextElementSibling;
    label.classList.remove('bad');
}
function setLabelText(element, msg) {
    const label = element.nextElementSibling;
    label.textContent = msg;
}

function isEmail(email) {
    let regex =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = name_input.value.trim();
    const email = email_input.value.trim();
    const message = message_input.value.trim();

    if (name == '') {
        name_input.focus();
        addErrorClass(name_input);
        addBadClass(name_input);
        setLabelText(name_input, 'Please fill in name');
        return;
    } else {
        addSuccessClass(name_input);
        addGoodClass(name_input);
    }

    if (email == '') {
        email_input.focus();
        addBadClass(email_input);
        addErrorClass(email_input);
        setLabelText(email_input, 'Please enter email');
        return;
    }

    if (message == '') {
        message_input.focus();
        addBadClass(message_input);
        addErrorClass(message_input);
        setLabelText(message_input, 'Please enter a message');
        return;
    } else {
        addSuccessClass(message_input);
        addGoodClass(message_input);
    }

    form.submit();
});

name_input.addEventListener('input', () => {
    setLabelText(name_input, 'Required Field');
    removeErrorClass(name_input);
    removeBadClass(name_input);
    removeSuccessClass(name_input);
    removeGoodClass(name_input);
});

name_input.addEventListener('blur', () => {
    if (name_input.value.trim() != '') {
        addSuccessClass(name_input);
        addGoodClass(name_input);
    } else {
        removeSuccessClass(name_input);
        removeGoodClass(name_input);
    }
});

email_input.addEventListener('input', () => {
    setLabelText(email_input, 'Required Field');
    removeErrorClass(email_input);
    removeBadClass(email_input);
    removeSuccessClass(email_input);
    removeGoodClass(email_input);
});

email_input.addEventListener('blur', () => {
    let email = email_input.value.trim();
    if (email != '' && isEmail(email)) {
        addSuccessClass(email_input);
        addGoodClass(email_input);
    } else {
        removeSuccessClass(email_input);
        removeGoodClass(email_input);
    }
});

email_input.addEventListener('change', () => {
    let email = email_input.value.trim();
    if (!isEmail(email)) {
        email_input.focus();
        addBadClass(email_input);
        addErrorClass(email_input);
        setLabelText(email_input, 'Please enter valid email');
    }
});

message_input.addEventListener('input', () => {
    setLabelText(message_input, 'Required Field');
    removeErrorClass(message_input);
    removeBadClass(message_input);
    removeSuccessClass(message_input);
    removeGoodClass(message_input);
});

message_input.addEventListener('blur', () => {
    if (message_input.value.trim() != '') {
        addSuccessClass(message_input);
        addGoodClass(message_input);
    } else {
        removeSuccessClass(message_input);
        removeGoodClass(message_input);
    }
});
