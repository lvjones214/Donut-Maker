class DonutMaker {

    constructor() {
            this._donutCount = 0;
            this._autoClickerCount = 0;
            this._autoClickerCost = 100;
            this._donutMultiplierCount = 0;
            this._donutMultiplierCost = 10;
            this._donutMultiplierValue = 1;
        }
        //Testing
    stashDonutsForTesting() {
        this._donutCount += 1000;
    }
    stashAutoClickersForTesting() {
        this._autoClickerCount += 10;
    }
    stashDonutMultipliersForTesting() {
            this._donutMultiplierCount += 10;
        }
        //Clickers
    recordClick() {
        if (this._donutMultiplierCount === 0 && this._autoClickerCount === 0) {
            this._donutCount++;
        } else if (this._autoClickerCount === 0 && this._donutMultiplierCount !== 0) {
            this._donutCount = this._donutCount + Math.pow(1.2, this._donutMultiplierCount);
        } else if (this._autoClickerCount !== 0 && this._donutMultiplierCount === 0) {
            this._donutCount = this._donutCount + this._autoClickerCount;
        } else {
            this._donutCount = this._donutCount + this._autoClickerCount * Math.pow(1.2, this._donutMultiplierCount);
        }
    }
    recordAutoClick() {
        if (this._donutMultiplierCount === 0) {
            this._donutCount = this._donutCount + 1;
        } else {
            this._donutCount = this._donutCount + this._donutMultiplierCount * Math.pow(1.2, this._donutMultiplierCount);
        }
    }
    get donutCount() {
        return this._donutCount;
    }


    // AutoClicker cost and purchase
    buyAutoClicker() {
        if (this._donutCount >= this._autoClickerCost) {
            this._donutCount -= this._autoClickerCost;
            this._autoClickerCount++;
        } else {
            this._donutCount = this._donutCount;
        }
        let n = this._autoClickerCount;
        this._autoClickerCost = Math.round(100 * Math.pow(1.1, n));
    }
    get autoClickerCount() {
        return this._autoClickerCount;
    }
    get autoClickerCost() {
            return this._autoClickerCost;
        }
        //AutoClicker Activation
    activateAutoClicker() {
            if (this._donutMultiplierCount == 0) {
                this._donutCount = this._donutCount + (this._autoClickerCount);
            } else {
                this._donutCount = this._donutCount + this._autoClickerCount * Math.pow(1.2, this._donutMultiplierCount);
            }
        }
        //DonutMultipliers
    buyDonutMultiplier() {
        if (this._donutCount >= this._donutMultiplierCost) {
            this._donutCount -= this._donutMultiplierCost;
            this._donutMultiplierCount++;
        } else {
            this._donutCount = this._donutCount;
        }
        this._donutMultiplierCost = 10 * Math.pow(1.1, this._donutMultiplierCount);
        this._donutMultiplierValue = Math.pow(1.2, this._donutMultiplierCount);
    }
    get donutMultiplierCount() {
        return this._donutMultiplierCount;
    }
    get donutMultiplierCost() {
        return this._donutMultiplierCost;
    }
    get donutMultiplierValue() {
        return this._donutMultiplierValue;
    }
}
export { DonutMaker }