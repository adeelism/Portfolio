function handleResize() {
    var screenWidth = window.innerWidth;
    var element = document.querySelector(".p-content");
    var navigation = document.querySelector(".navigation");

    if (screenWidth <= 1220) {
        // Set display none if the condition is met
        document.querySelector('.the-right-sidebar').style.display = 'none';
        navigation.classList.remove("display-none");
        element.classList.remove("col-lg-4");
        // Add class "newClass" to the element
        element.classList.add("col-lg-5");


    } else {
        // Set display block if the condition is not met
        document.querySelector('.the-right-sidebar').style.display = 'block';
        element.classList.remove("col-lg-5");
        element.classList.add("col-lg-4");
        navigation.classList.add("display-none");
    }
}

// Attach the handleResize function to the window resize event
window.addEventListener('resize', handleResize);

// Call the handleResize function initially to set the initial state
handleResize();

// JS FOR SLIDER

{
    class SliderClip {
        constructor(el) {
            this.el = el;
            this.Slides = Array.from(this.el.querySelectorAll('li'));
            this.Nav = Array.from(this.el.querySelectorAll('aside a'));
            this.totalSlides = this.Slides.length;
            this.current = 0;
            this.autoPlay = false; //true or false
            this.timeTrans = 5000; //transition time in milliseconds
            this.IndexElements = [];

            for (let i = 0; i < this.totalSlides; i++) {
                this.IndexElements.push(i);
            }

            this.setCurret();
            this.initEvents();
        }
        setCurret() {
            this.Slides[this.current].classList.add('current');
            this.Nav[this.current].classList.add('current_dot');
        }
        initEvents() {
            const self = this;

            this.Nav.forEach(dot => {
                dot.addEventListener('click', ele => {
                    ele.preventDefault();
                    this.changeSlide(this.Nav.indexOf(dot));
                });
            });

            this.el.addEventListener('mouseenter', () => self.autoPlay = false);
            this.el.addEventListener('mouseleave', () => self.autoPlay = true);

            setInterval(function () {
                if (self.autoPlay) {
                    self.current = self.current < self.Slides.length - 1 ? self.current + 1 : 0;
                    self.changeSlide(self.current);
                }
            }, this.timeTrans);

        }
        changeSlide(index) {

            this.Nav.forEach(allDot => allDot.classList.remove('current_dot'));

            this.Slides.forEach(allSlides => allSlides.classList.remove('prev', 'current'));

            const getAllPrev = value => value < index;

            const prevElements = this.IndexElements.filter(getAllPrev);

            prevElements.forEach(indexPrevEle => this.Slides[indexPrevEle].classList.add('prev'));

            this.Slides[index].classList.add('current');
            this.Nav[index].classList.add('current_dot');
        }
    }


    const slider = new SliderClip(document.querySelector('.slider'));
}

// JS FOR TOP BAR

var menuToggle = document.querySelector("#menu-toggle");

function menuToggles() {
    var activeElements = document.querySelectorAll(".active-element");
    for (var activated = 0; activated < activeElements.length; activated++) {
        activeElements[activated].classList.toggle("active");
    }
}

menuToggle.addEventListener("click", menuToggles)

// settings ICON

var selector = document.querySelector(".toggle");

function toggleActive() {
    if (selector.classList.contains("active")) {
        selector.className = "toggle";
    } else {
        selector.className += " active";
    }
}

selector.addEventListener("click", toggleActive);

function onChangeColor(color) {
    var screenWidth = window.innerWidth;
    var r = document.querySelector(':root');
    r.style.setProperty('--primary-color', color);
    if (screenWidth <= 1220) {
        menuToggles();
    }
    else {
        toggleActive();
    }
}

// GLITCH EFFECT TOP

// const chars = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

// var Glitch = function (selector, index, numberOfGlitchedLetter, timeGlitch, timePerLetter, timeBetweenGlitch) {
//     this.selector = selector;
//     this.index = index;
//     this.numberOfGlitchedLetter = numberOfGlitchedLetter;
//     this.innerText;
//     this.charArray = [];
//     this.charIndex = [];
//     this.timeGlitch = timeGlitch;
//     this.timeBetweenGlitch = timeBetweenGlitch;
//     this.timePerLetter = timePerLetter;
//     this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
//     this.count = 0;
// }

// Glitch.prototype.init = function () {
//     this.innerText = this.selector.innerText;
//     this.charArray = this.innerText.split("");
//     if (this.numberOfGlitchedLetter == undefined || this.numberOfGlitchedLetter > this.innerText.length) {
//         this.numberOfGlitchedLetter = this.innerText.length;
//     }
//     this.defineCharIndexToRandomize();
// }

// Glitch.prototype.defineCharIndexToRandomize = function () {
//     this.charIndex = [];
//     for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
//         let randCharIndex = Math.floor(Math.random() * this.charArray.length);
//         this.charIndex.push(randCharIndex);
//     }
// }

// Glitch.prototype.randomize = function () {
//     //copy the char array
//     let randomString = Array.from(this.charArray);

//     //randomize char
//     for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
//         let randIndex = Math.floor(Math.random() * chars.length);
//         let randCharIndex = this.charIndex[i];
//         if (randomString[randCharIndex] !== ' ') {
//             randomString[randCharIndex] = chars[randIndex];
//         }
//     }
//     this.selector.innerText = randomString.join("");
// }

// Glitch.prototype.update = function (interval) {
//     if (this.count >= this.maxCount - 1) {
//         this.selector.innerText = this.innerText;
//         this.defineCharIndexToRandomize();
//         let ctx = this;
//         let wait = setTimeout(function () {
//             ctx.count = 0;
//         }, this.timeBetweenGlitch);
//     } else {
//         this.randomize();
//         this.count++;
//     }
// }

// Glitch.prototype.glitch = function () {
//     let ctx = this;
//     let interval = setInterval(function () {
//         ctx.update(this);
//     }, this.timePerLetter);
// }

// var arrayElements;
// var glitchArray = [];

// function initAllGlitch() {
//     arrayElements = document.querySelectorAll(".content");
//     for (let i = 0; i < arrayElements.length; i++) {
//         let selector = arrayElements[i];
//         let randLetterNumber = 2 + Math.floor(Math.random() * 8);
//         let randGlitchTime = 500 + Math.floor(Math.random() * 2500);
//         let randGlitchPauseTime = 500 + Math.floor(Math.random() * 2500);
//         let glitch = new Glitch(selector, i, randLetterNumber, 200, 65, randGlitchPauseTime);
//         glitch.init();
//         glitchArray.push(glitch);
//     }
// }


// function update() {
//     for (let i = 0; i < glitchArray.length; i++) {
//         let glitch = glitchArray[i];
//         glitch.glitch();
//     }
// }

// initAllGlitch();
// update();

// BG JS

// const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

// const numBalls = 50;
// const balls = [];

// for (let i = 0; i < numBalls; i++) {
//     let ball = document.createElement("div");
//     ball.classList.add("ball");
//     ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//     ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//     ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//     ball.style.transform = `scale(${Math.random()})`;
//     ball.style.width = `${Math.random()}em`;
//     ball.style.height = ball.style.width;

//     balls.push(ball);
//     document.body.append(ball);
// }

// // Keyframes
// balls.forEach((el, i, ra) => {
//     let to = {
//         x: Math.random() * (i % 2 === 0 ? -11 : 11),
//         y: Math.random() * 12
//     };

//     let anim = el.animate(
//         [
//             { transform: "translate(0, 0)" },
//             { transform: `translate(${to.x}rem, ${to.y}rem)` }
//         ],
//         {
//             duration: (Math.random() + 1) * 2000, // random duration
//             direction: "alternate",
//             fill: "both",
//             iterations: Infinity,
//             easing: "ease-in-out"
//         }
//     );
// });

// MATRIX ANIMATION

// function r(from, to) {
//     return ~~(Math.random() * (to - from + 1) + from);
// }

// function pick() {
//     return arguments[r(0, arguments.length - 1)];
// }

// function getChar() {
//     return String.fromCharCode(pick(
//         r(0x3041, 0x30ff),
//         r(0x2000, 0x206f),
//         r(0x0020, 0x003f)
//     ));
// }

// function loop(fn, delay) {
//     let stamp = Date.now();
//     function _loop() {
//         if (Date.now() - stamp >= delay) {
//             fn(); stamp = Date.now();
//         }
//         requestAnimationFrame(_loop);
//     }
//     requestAnimationFrame(_loop);
// }

// class Char {
//     constructor() {
//         this.element = document.createElement('spun-tag');
//         this.mutate();
//     }
//     mutate() {
//         this.element.textContent = getChar();
//     }
// }

// class Trail {

//     constructor(list = [], options) {
//         this.list = list;
//         this.options = Object.assign(
//             { size: 10, offset: 0 }, options
//         );
//         this.body = [];
//         this.move();
//     }

//     traverse(fn) {
//         this.body.forEach((n, i) => {
//             let last = (i == this.body.length - 1);
//             if (n) fn(n, i, last);
//         });
//     }

//     move() {
//         this.body = [];
//         let { offset, size } = this.options;
//         for (let i = 0; i < size; ++i) {
//             let item = this.list[offset + i - size + 1];
//             this.body.push(item);
//         }
//         this.options.offset =
//             (offset + 1) % (this.list.length + size - 1);
//     }
// }

// class Rain {
//     constructor({ target, row }) {
//         this.element = document.createElement('p');
//         this.build(row);
//         if (target) {
//             target.appendChild(this.element);
//         }
//         this.drop();
//     }

//     build(row = 20) {
//         let root = document.createDocumentFragment();
//         let chars = [];
//         for (let i = 0; i < row; ++i) {
//             let c = new Char();
//             root.appendChild(c.element);
//             chars.push(c);
//             if (Math.random() < .5) {
//                 loop(() => c.mutate(), r(1e3, 5e3));
//             }
//         }
//         this.trail = new Trail(chars, {
//             size: r(10, 30), offset: r(0, 100)
//         });
//         this.element.appendChild(root);
//     }

//     drop() {
//         let trail = this.trail;
//         let len = trail.body.length;
//         let delay = r(10, 100);
//         loop(() => {
//             trail.move();
//             trail.traverse((c, i, last) => {
//                 c.element.style = `
//             color: hsl(136, 100%, ${85 / len * (i + 1)}%);
//             transition: 0.3s ease-in-out all;
//           `;
//                 if (last) {
//                     c.mutate();
//                     c.element.style = `
//               color: hsl(136, 100%, 85%);
//               text-shadow:
//                 0 0 .5em #fff,
//                 0 0 .5em currentColor;
//             `;
//                 }
//             });
//         }, delay);
//     }
// }

// const main = document.querySelector('main');
// for (let i = 0; i < 50; ++i) {
//     new Rain({ target: main, row: 50 });
// }


// TEXT EFFECT 2

var span = document.querySelector(".introdcution .typewriter span");
var textArr = span.getAttribute("data-text").split(",");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;

function typing(textIndex, text) {
    var charIndex = 0;
    var maxCharIndex = text.length - 1;

    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex];
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function () { deleting(textIndex, text) }, sBetweenWord * 1000);

        } else {
            charIndex += 1;
        }
    }, sPerChar * 1000);
}

function deleting(textIndex, text) {
    var minCharIndex = 0;
    var charIndex = text.length - 1;

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex);
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;
            setTimeout(function () {
                typing(textIndex, textArr[textIndex])
            }, sBetweenWord * 1000);
        } else {
            charIndex -= 1;
        }
    }, sPerChar * 1000);
}

typing(0, textArr[0]);