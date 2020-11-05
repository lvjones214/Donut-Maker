import {
    DonutMaker
} from "/src/js/DonutMaker.js"
const donutMaker = new DonutMaker();

//Make Donuts
const updateDonutCount = function(donutMaker) {
    const donutCount = document.querySelector(".number-of-donuts");
    donutCount.innerText = donutMaker.donutCount;
};
const donutButton = document.querySelector(".make-donuts-button");
donutButton.addEventListener("click", () => {
    donutMaker.recordClick();
    updateDonutCount(donutMaker);
});

//AutoClicker
const updateAutoClickerCount = function(donutMaker) {
    const autoClickerCount = document.querySelector(".autoclicker-count");
    autoClickerCount.innerText = donutMaker.autoClickerCount;
};
const buyAutoClicker = document.querySelector(".buy-autoclicker-button");
buyAutoClicker.addEventListener("click", () => {
    donutMaker.buyAutoClicker();
    updateDonutCount(donutMaker);
    updateAutoClickerCount(donutMaker);
    displayAutoClickerCost(donutMaker);
    activateAutoClicker(donutMaker);
    // disableBuyAutoClicker(donutMaker);
});
const displayAutoClickerCost = function(donutMaker) {
    const autoClickerCost = document.querySelector(".autoclicker-cost");
    autoClickerCost.innerText = "Next AutoClicker Cost: " + donutMaker.autoClickerCost + " donuts";
}

function disableBuyAutoClicker() {
    if (donutCount < AutoClickerCost) {
        document.getElementById(".buy-autoclicker-button").disabled = true;
    }
}

//Donut Multiplier
const updateDonutMultiplierCount = function(donutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = donutMaker.donutMultiplierCount;
};
const buyDonutMultiplier = document.querySelector(".buy-donutMultiplier-button");
buyDonutMultiplier.addEventListener("click", () => {
    donutMaker.buyDonutMultiplier();
    updateDonutCount(donutMaker);
    updateDonutMultiplierCount(donutMaker);
    displayDonutMultiplierCost(donutMaker);
    // disableBuyDonutMultiplier(donutMaker);
});
const displayDonutMultiplierCost = function(donutMaker) {
    const donutMultiplierCost = document.querySelector(".donut-multiplier-cost");
    donutMultiplierCost.innerText = "Next Donut Multipler Cost: " + donutMaker.donutMultiplierCost + " donuts";
}
const disableBuyDonutMultiplier = function() {
    if (donutCount < donutMultiplierCost) {
        document.querySelector(".buy-donutMultiplier-button").disabled = true;
    }
}