/* banner.html */

HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector('div.banner');
const imageDiv = document.querySelectorAll('div.banner div');
const lastImageDiv = document.createElement('div');
const firstImageDiv = document.createElement('div');
const next = document.querySelector('div.next');
const prev = document.querySelector('div.prev');
const buttons = document.querySelectorAll('.buttons button');

let checkArrow = false;
let count = 1;
let auto = setInterval(autoSlide, 2000);
let temp = buttons[0];
const pageNow = document.querySelector('#page-now');

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clearInterval(auto);
        count = parseInt(button.innerHTML);
        changeButtonStyle();
        banner.style.transition = 'transform 0.3s';
        banner.style.transform = `translate(${-808 * count}px)`;
        auto = setInterval(autoSlide, 2000);
    });
});

imageDiv.forEach(
    (div, i) => (div.style.backgroundImage = `url(../../static/css/main/images/00${i + 1}.jpg)`)
);

banner.appendChild(lastImageDiv);
lastImageDiv.style.backgroundImage = `url(../../static/css/main/images/001.jpg)`;

banner.insertBefore(firstImageDiv, document.querySelector('div.banner div'));
firstImageDiv.style.backgroundImage = `url(../../static/css/main/images/00${imageDiv.length}.jpg)`;

banner.style.transform = `translate(-808px)`;

function changeButtonStyle() {
    if (temp) {
        temp.style.background = 'white';
        temp.style.color = 'black';
    }
    buttons[count - 1].style.background = 'black';
    buttons[count - 1].style.color = 'white';
    temp = buttons[count - 1];
    pageNow.innerHTML = count;
}

function autoSlide() {
    banner.style.transition = 'transform 0.3s';
    banner.style.transform = `translate(${-808 * ++count}px)`;
    console.log(count);
    if (count == 5) {
        count = 1;
        setTimeout(function () {
            banner.style.transition = 'transform 0s';
            banner.style.transform = 'translate(-808px)';
        }, 300);
    }
    changeButtonStyle();
}

prev.addEventListener('click', function () {
    if (checkArrow) {
        return;
    }
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = 'transform 0.3s';
    banner.style.transform = `translate(${-808 * --count}px)`;
    if (count == 0) {
        count = 4;
        setTimeout(function () {
            banner.style.transition = 'transform 0s';
            banner.style.transform = `translate(${-808 * imageDiv.length}px)`;
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(() => {
        checkArrow = false;
    }, 300);
});

next.addEventListener('click', function () {
    if (checkArrow) {
        return;
    }
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = 'transform 0.3s';
    banner.style.transform = `translate(${-808 * ++count}px)`;
    if (count == 5) {
        count = 1;
        setTimeout(function () {
            banner.style.transition = 'transform 0s';
            banner.style.transform = 'translate(-808px)';
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(() => {
        checkArrow = false;
    }, 300);
});

/* 중앙 배너 */
const middleBanner = document.querySelector('div.middle-banner');
const middleImageDiv = document.querySelectorAll('div.middle-banner div');
const middleLastImageDiv = document.createElement('div');
const middleFirstImageDiv = document.createElement('div');
const middleNext = document.querySelector('div.middle-next');
const middlePrev = document.querySelector('div.middle-prev');
const middleButtons = document.querySelectorAll('.middle-buttons button');

let middleCheckArrow = false;
let middleCount = 1;
let middleAuto = setInterval(middleAutoSlide, 2000);
let middleTemp = middleButtons[0];
const middlePageNow = document.querySelector('#middle-page-now');

HTMLCollection.prototype.forEach = Array.prototype.forEach;
middleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        clearInterval(auto);
        middleCount = parseInt(button.innerHTML);
        changeMidlleButtonStyle();
        middleBanner.style.transition = 'transform 0.3s';
        middleBanner.style.transform = `translate(${-808 * middleCount}px)`;
        auto = setInterval(autoSlide, 2000);
    });
});

middleImageDiv.forEach(
    (div, i) => (div.style.backgroundImage = `url(../../static/css/main/images/000${i + 1}.jpg)`)
);

middleBanner.appendChild(middleLastImageDiv);
middleLastImageDiv.style.backgroundImage = `url(../../static/css/main/images/0001.jpg)`;

middleBanner.insertBefore(middleFirstImageDiv, document.querySelector('div.middle-banner div'));
middleFirstImageDiv.style.backgroundImage = `url(../../static/css/main/images/000${middleImageDiv.length}.jpg)`;

middleBanner.style.transform = `translate(-808px)`;

function changeMidlleButtonStyle() {
    if (middleTemp) {
        middleTemp.style.background = 'white';
        middleTemp.style.color = 'black';
    }
    middleButtons[middleCount - 1].style.background = 'black';
    middleButtons[middleCount - 1].style.color = 'white';
    middleTemp = middleButtons[middleCount - 1];
    middlePageNow.innerHTML = middleCount;
}

function middleAutoSlide() {
    middleBanner.style.transition = 'transform 0.3s';
    middleBanner.style.transform = `translate(${-808 * ++middleCount}px)`;
    console.log(middleCount);
    if (middleCount == 5) {
        middleCount = 1;
        setTimeout(function () {
            middleBanner.style.transition = 'transform 0s';
            middleBanner.style.transform = 'translate(-808px)';
        }, 300);
    }
    changeMidlleButtonStyle();
}

prev.addEventListener('click', function () {
    if (middleCheckArrow) {
        return;
    }
    middleCheckArrow = true;
    clearInterval(auto);
    middleBanner.style.transition = 'transform 0.3s';
    middleBanner.style.transform = `translate(${-808 * --middleCount}px)`;
    if (count == 0) {
        count = 4;
        setTimeout(function () {
            middleBanner.style.transition = 'transform 0s';
            middleBanner.style.transform = `translate(${-808 * middleImageDiv.length}px)`;
        }, 300);
    }
    changeMidlleButtonStyle();
    auto = setInterval(middleAutoSlide, 2000);
    setTimeout(() => {
        middleCheckArrow = false;
    }, 300);
});

next.addEventListener('click', function () {
    if (middleCheckArrow) {
        return;
    }
    middleCheckArrow = true;
    clearInterval(auto);
    middleBanner.style.transition = 'transform 0.3s';
    middleBanner.style.transform = `translate(${-808 * ++middleCount}px)`;
    if (count == 5) {
        count = 1;
        setTimeout(function () {
            middleBanner.style.transition = 'transform 0s';
            middleBanner.style.transform = 'translate(-808px)';
        }, 300);
    }
    changeMidlleButtonStyle();
    middleAuto = setInterval(middleAutoSlide, 2000);
    setTimeout(() => {
        middleCheckArrow = false;
    }, 300);
});