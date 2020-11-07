import {
    DonutMaker
} from "/src/js/DonutMaker.js"

//Modal Developer Information
const developerButton = document.getElementById("developer-information");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}
developerButton.addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
});

const exitButton = document.querySelector(".exit");
exitButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

//Modal Company Information
// const companyInfoButton = document.getElementById("company-information");
// const modal2 = document.querySelector(".modal2");
// const backdrop2 = document.querySelector(".backdrop2");

// function closeModal2() {
//     modal2.style.display = "none";
//     backdrop2.style.display = "none";
// }
// companyInfoButton.addEventListener("click", function() {
//     modal2.style.display = "block";
//     backgrop2.style.display = "block";
// });

// const exitButton2 = document.querySelector(".exit2");
// exitButton2.addEventListener("click", closeModal2);
// backdrop2.addEventListener("click", closeModal2);


const newDonutMaker = new DonutMaker();

//Make Donuts
const updateDonutCount = function(donutMaker) {
    const donutCounter = document.querySelector(".number-of-donuts");
    donutCounter.innerText = Math.round(donutMaker.donutCount * 10) / 10;
    updateDonutMultiplierButton(donutMaker);
    updateAutoClickerButton(donutMaker);
};
updateDonutCount(newDonutMaker);
const donutButton = document.querySelector(".make-donuts-button");
donutButton.addEventListener("click", () => {
    newDonutMaker.recordClick();
    updateDonutCount(newDonutMaker);
});

function updateAutoClickerButton(donutMaker) {
    const grayOutBuyAutoClickerButton = document.querySelector(".buy-autoclicker-button");
    grayOutBuyAutoClickerButton.classList.add("gray-out-button");
    if (donutMaker.donutCount >= donutMaker.autoClickerCost) {
        grayOutBuyAutoClickerButton.classList.toggle("gray-out-button");
    }
}

function updateDonutMultiplierButton(donutMaker) {
    const lightUpBuyDonutMultiplierButton = document.querySelector(".buy-donutMultiplier-button");
    lightUpBuyDonutMultiplierButton.classList.add('lightUpButton');
    if (donutMaker.donutCount < donutMaker.donutMultiplierCost) {
        lightUpBuyDonutMultiplierButton.classList.toggle('lightUpButton');
    }
}

//reset button
// const resetButton = document.getElementById("reset-button");
// resetButton.addEventListener("click", function() {
//     donutMaker = new DonutMaker;
// });



//AutoClicker
const updateAutoClickerCount = function(newDonutMaker) {
    const autoClickerCount = document.querySelector(".autoclicker-count");
    autoClickerCount.innerText = newDonutMaker.autoClickerCount;
};
const displayAutoClickerCost = function(newDonutMaker) {
    const autoClickerCost = document.querySelector(".autoclicker-cost");
    autoClickerCost.innerText = "Next AutoClicker Cost: " + Math.round(newDonutMaker.autoClickerCost * 10) / 10 + " donuts";
}
const buyAutoClicker = document.querySelector(".buy-autoclicker-button");
buyAutoClicker.addEventListener("click", () => {
    newDonutMaker.buyAutoClicker();
    updateDonutCount(newDonutMaker);
    updateAutoClickerCount(newDonutMaker);
    displayAutoClickerCost(newDonutMaker);
});


//Donut Multiplier
const updateDonutMultiplierCount = function(newDonutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = newDonutMaker.donutMultiplierCount;
};
const displayDonutMultiplierCost = function(newDonutMaker) {
    const donutMultiplierCost = document.querySelector(".donut-multiplier-cost");
    donutMultiplierCost.innerText = "Next Donut Multipler Cost: " + Math.round(newDonutMaker.donutMultiplierCost * 10) / 10 + " donuts";
}
const displayDonutMultiplierValue = function(newDonutMaker) {
    const displayDonutMultiplierValue = document.querySelector(".donut-multiplier-value");
    displayDonutMultiplierValue.innerText = "Donut Multiplier Value: " + Math.round(newDonutMaker.donutMultiplierValue * 100) / 100;
}
const buyDonutMultiplier = document.querySelector(".buy-donutMultiplier-button");
buyDonutMultiplier.addEventListener("click", () => {
    newDonutMaker.buyDonutMultiplier();
    updateDonutCount(newDonutMaker);
    updateDonutMultiplierCount(newDonutMaker);
    displayDonutMultiplierCost(newDonutMaker);
    displayDonutMultiplierValue(newDonutMaker);
});