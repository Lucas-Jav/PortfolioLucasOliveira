import { showMenu } from "./components/menu-navbar.js";
import { showWakatime } from "./components/modal-wakatime.js";

const body = document.querySelector('body');

if (body.clientWidth <= 1024) {
    document.querySelector('#nav').remove();

    const label = document.createElement('label');
    label.classList.add('container');

    const button = document.createElement('button');

    button.addEventListener('click', () => {
        showMenu();
    });

    const divSpan = document.createElement('div');
    divSpan.classList.add('checkmark');

    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    document.querySelector('header').appendChild(label);
    label.append(button, divSpan);
    divSpan.append(span1, span2, span3);
};

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    stars.style.left = `${value * 0.25}px`;
    moon.style.top = `${value * 1.05}px`;
    mountains_behind.style.top = `${value * 0.5}px`;
    mountains_front.style.top = `${value * 0}px`;
    text.style.marginRight = `${value * 4}px`;
    text.style.marginTop = `${value * 1.5}px`;
    btn.style.marginTop = `${value * 1.5}px`;
    header.style.marginTop = `${value * 0.5}px`;
});

const btnWakatime = document.querySelector('#wakatimeShow');
const btnGitHub = document.querySelector('#gitHubShow');

btnWakatime.addEventListener('click', () => {
    const divBg = document.querySelector('.menu-modal');
    divBg.style.display = 'flex';

    showWakatime(1);
})

btnGitHub.addEventListener('click', () => {
    const divBg = document.querySelector('.menu-modal');
    divBg.style.display = 'flex';

    showWakatime(2);
})
