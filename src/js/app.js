import {
    DonutMaker
} from "/src/js/DonutMaker.js"

//Modal Developer Information
// const developerButton = document.querySelector(".developer-info-list");
// const modal = document.querySelector(".modal");
// const backdrop = document.querySelector(".backdrop");

// function closeModal(){
//     modal.style.display="none";
//     backdrop.style.display = "none";
// }
// developerButton.addEventListener("click", function(){
//     modal.style.display = "block";
//     backgrop.style.display = "block";
// });

// const exitButton = document.querySelector(".exit");
// exitButton.addEventListener("click",closeModal);
// backdrop.addEventListener("click", closeModal);


const newDonutMaker = new DonutMaker();

//Make Donuts
const updateDonutCount = function(donutMaker) {
    const donutCounter = document.querySelector(".number-of-donuts");
    donutCounter.innerText = donutMaker.donutCount;
  // updateAutoClickerButton(donutMaker);
  // updateDonutMultiplierButton(donutMaker);
};
updateDonutCount(newDonutMaker);
const donutButton = document.querySelector(".make-donuts-button");
donutButton.addEventListener("click", () => {
    newDonutMaker.recordClick();
    updateDonutCount(newDonutMaker);
});

// function updateAutoClickerButton() {
//     const lightUpBuyAutoClickerButton = document.querySelector(".buy-autoclicker-count");
//     lightUpBuyAutoClickerButton.classList.add("lightUpBotton");
//     if (donutCount < donutMaker.AutoClickerCost) {
//         lightUpBuyAutoClickerButton.classList.toggle("lightUpButton");
//     }
// }
// function updateDonutClickerButton() {
//     const lightUpBuyDonutMultiplier = document.querySelector(".buy-donutMulitiplier-button");
//     lightUpBuyDonutMultiplier.classList.add("lightUpButton");
//     if (donutCount < donutMultiplierCost) {
//         lightUpBuyDonutMultiplier.classList.toggle("lightUpButton");
//     }
// }

//reset button



//AutoClicker
const updateAutoClickerCount = function(newDonutMaker) {
    const autoClickerCount = document.querySelector(".autoclicker-count");
    autoClickerCount.innerText = newDonutMaker.autoClickerCount;
};
const displayAutoClickerCost = function(newDonutMaker) {
    const autoClickerCost = document.querySelector(".autoclicker-cost");
    autoClickerCost.innerText = "Next AutoClicker Cost: " + newDonutMaker.autoClickerCost + " donuts";
}
const buyAutoClicker = document.querySelector(".buy-autoclicker-button");
buyAutoClicker.addEventListener("click", () => {
    newDonutMaker.buyAutoClicker();
    updateDonutCount(newDonutMaker);
    updateAutoClickerCount(newDonutMaker);
    displayAutoClickerCost(newDonutMaker);
    activateAutoClicker(newDonutMaker);
});


//Donut Multiplier
const updateDonutMultiplierCount = function(newDonutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = newDonutMaker.donutMultiplierCount;
};
const displayDonutMultiplierCost = function(newDonutMaker) {
    const donutMultiplierCost = document.querySelector(".donut-multiplier-cost");
    donutMultiplierCost.innerText = "Next Donut Multipler Cost: " + newDonutMaker.donutMultiplierCost + " donuts";
}
const displayDonutMultiplierValue = function(newDonutMaker){
    const displayDonutMultiplierValue = document.querySelector(".donut-multiplier-value");
    displayDonutMultiplierValue.innerText = "Donut Multiplier Value: " + newDonutMaker.donutMultiplierValue;
}
const buyDonutMultiplier = document.querySelector(".buy-donutMultiplier-button");
buyDonutMultiplier.addEventListener("click", () => {
    newDonutMaker.buyDonutMultiplier();
    updateDonutCount(newDonutMaker);
    updateDonutMultiplierCount(newDonutMaker);
    displayDonutMultiplierCost(newDonutMaker);
    displayDonutMultiplierValue(newDonutMaker);
});

