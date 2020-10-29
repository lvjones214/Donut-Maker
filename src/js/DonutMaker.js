class DonutMaker{

    constructor(){
        this._donutCount = 0;
        this._autoDonutCount = 0;
        this._totalDonutCount = 0;
        this._autoClickerCount = 0;
    }
     recordClick(){
        this._donutCount++;
    }
    recordAutoClick(){
        this._autoDonutCount +=100;
    }
    get donutCount(){
        return this._donutCount;
    }
    get autoDonutCount(){
        return this._autoDonutCount;
    }
    get totalDonutCount(){
        this._totalDonutCount = this._donutCount + this._autoDonutCount;
        return this._totalDonutCount;
    }
    buyAutoClicker(){
        this._autoClickerCount ++;
        this._totalDonutCount -= this.autoClickerCost;
    }
    get autoClickersPurchased(){
        return this._autoClickerCount;
    }
    get autoClickerCost(){
        let unRoundedCost = 100 *Math.pow(1.1,(this._autoClickerCount -1));
        this._autoClickerCost = Math.round(unRoundedCost);
        return this._autoClickerCost;
    }
}

