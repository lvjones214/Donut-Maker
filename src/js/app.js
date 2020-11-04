import {
    DonutMaker
} from "/src/js/DonutMaker.js"
const donutMaker = new DonutMaker();

const donutButton = document.querySelector(".donut-clicker-button");

donutButton.addEventListener("click", () => {
    donutMaker.recordClick();
    updateDonutCount(donutMaker);
});

const updateDonutCount = function (donutMaker) {
    const donutCount = document.querySelector(".number-of-donuts");
    donutCount.innerText = donutMaker.donutCount;
};

const buyAutoClicker = document.querySelector(".buy-autoclicker-button");

buyAutoClicker.addEventListener("click",() => {
    donutMaker.buyAutoClicker();
    updateAutoClickerCount(donutMaker);
    updateDonutCount(donutMaker);
});

const updateAutoClickerCount = function (donutMaker) {
    const autoClickerCount = document.querySelector(".autoclicker-count");
    autoClickerCount.innerText = donutMaker.autoClickerCount;
};

const buyDonutMultiplier = document.querySelector(".buy-donutMultiplier-button");

buyDonutMultiplier.addEventListener("click", () => {
    donutMaker.buyDonutMultiplier();
    updateDonutMultiplierCount(donutMaker);
    updateDonutCount(donutMaker);
});

const updateDonutMultiplierCount = function (donutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = donutMaker.donutMultiplierCount;
};

