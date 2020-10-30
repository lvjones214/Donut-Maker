class DonutMaker{

    constructor(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplier = 1;
    }
    //Testing
    stashDonutsForTesting(){
        this._donutCount +=1000;
    } 
    stashAutoClickersForTesting(){
        this._autoClickerCount +=10;
    }
    //Clickers
    recordClick(){
        this._donutCount++;
    }
    recordAutoClick(){
        this._donutCount ++;
    }
    get donutCount(){
        return this._donutCount;
    }
    get autoDonutCount(){
        return this._donutCount;
    }
    //AutoClicker cost and purchase
    buyAutoClicker(){
        if(this._autoClickerCount==0){
            this.autoClickerCost = 100;
        } else {
            let n = this._autoClickerCount;
            this._autoClickerCost = Math.round(100*Math.pow(1.1,n));
        }
        if(this._donutCount >= this._autoClickerCost){
            this._donutCount -= this._autoClickerCost;
            this._autoClickerCount ++;
        }else{
           // alert("You can't buy another autoClicker yet!");
           this._totalDonutCount = this._totalDonutCount;
        } 
    }
    get autoClickersPurchased(){
        return this._autoClickerCount;
    }
    //AutoClicker Activation
    activateAutoClicker(){
        this._donutCount = this._donutCount + (this._autoClickerCount);
    }
    //DonutMultipliers
    donutMultiplier(){
        this._donutMultiplier = 1.2;
        this._donutCount = this._donutMultiplier*this._donutCount;
    }
}

