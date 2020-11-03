let underTest;
describe('I1:F1: Have a way to count donuts.', () =>{
    describe('Can add to donut count.',() => {
        beforeEach(() => {
            underTest = new DonutMaker;
        });

        it('Should start with a donut count of 0.', () => {
            expect(underTest._donutCount).toBe(0);
        });
        it('Should add one donut to the donut count when it records a click.', () => {
            underTest.recordClick();
             expect(underTest._donutCount).toBe(1);
        });
        it('Should add one donut to the donut count when it records a click.', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest._donutCount).toBe(2);
        });
    });
});
describe('I1.F2:Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () =>{
    describe('Can retrieve an Auto Clicker count.', () => {
        beforeEach(()=>{
            underTest = new DonutMaker;
        });
        it('Should have an AutoClicker that clicks by itself', () =>{
            underTest.recordClick();
            expect(underTest._donutCount).toBe(1);
            underTest.recordAutoClick();
            expect(underTest._donutCount).toBe(2);
        }); 
        it('Should subtract 100 donuts when buy AutoClicker', () =>{
            underTest.stashDonutsForTesting();
            expect(underTest._donutCount).toBe(1000);
            expect(underTest._autoClickerCount).toBe(0);
            expect(underTest._autoClickerCost).toBe(100);
            underTest.buyAutoClicker();
            expect(underTest._autoClickerCount).toBe(1);
            expect(underTest._donutCount).toBe(900);
        });  
    });
});
describe('I1.F3: The cost of each Auto Clicker will go up with each purchase.', () =>{
    describe('Increase the cost of the second Auto Clicker by an additional ten percent.', () => {
        beforeEach(()=>{
            underTest = new DonutMaker;
            underTest.stashDonutsForTesting();

        });
        it('should increase cost of second AutoClicker by 10%',() =>{
            underTest.buyAutoClicker();
            expect(underTest._autoClickerCount).toBe(1);
            underTest.buyAutoClicker();
            expect(underTest._autoClickerCost).toBe(110);
            expect(underTest._autoClickerCount).toBe(2);
            expect(underTest.donutCount).toBe(790);
        });
        it('should increase cost of second AutoClicker by 10%',() =>{
            underTest.buyAutoClicker();
            expect(underTest._autoClickerCount).toBe(1);
            underTest.buyAutoClicker();
            expect(underTest._autoClickerCount).toBe(2);
            expect(underTest.donutCount).toBe(790);
            underTest.buyAutoClicker();
            expect(underTest._autoClickerCount).toBe(3);
            expect(underTest.donutCount).toBe(669);
        });
    })
})

describe('I1.F4: Ensure that there are enough clicks to buy a Auto Clicker.', () =>{
    describe('Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clicker.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
        });
        it('should return message if totalDonutCount < autoClickerCost and not deduct donuts from totalDonutCount', ()=>{
            underTest.buyAutoClicker();
            expect(underTest.donutCount).toBe(0);
            underTest.stashDonutsForTesting();
            underTest.buyAutoClicker();
            expect(underTest.donutCount).toBe(900);
        });
    });
});
describe('I1.F5: The amount of Auto Clickers affect the amount of donuts added when an Activate Auto Clickers event is called.', () =>{
    describe('When the activate Auto Clickers event is executed, increase the donut total by the amount of Auto Clickers owned.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
            underTest.stashAutoClickersForTesting();
        });
        it('should increase donut total by amount of autoclickers with activate autoClickers event activation', ()=>{
            underTest.activateAutoClicker();
            underTest.recordClick();
            expect(underTest.donutCount).toBe(11);
        });
    });
});
describe('I2:F1: Be able to purchase the first Donut Multiplier with 10 clicks from your click count.', () =>{
    describe('As a user, I want to make my clicks more powerful, so that I can make the work to get more Auto Clickers easier.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
            underTest.stashDonutsForTesting();
        });
        // it('can retrieve a Donut Multiplier count.', ()=>{
        //     underTest.recordDonutMultiplier();
        //     expect(underTest._donutMultiplierCount).toBe(1);
        // });
        it('can add to the donut multiplier count', () => {
            expect(underTest._donutCount).toBe(1000);
            expect(underTest._donutMultiplierCount).toBe(0);
            underTest.buyDonutMultiplier();
            expect(underTest._donutCount).toBe(990);
            expect(underTest._donutMultiplierCount).toBe(1);
        });
        it('Subtract the amount of Donut Multiplier cost from the donut count.', () => {
            underTest.buyDonutMultiplier();
            expect(underTest.donutCount).toBe(990);
        });
    });
});
describe('I2:F2: The cost of each Donut Multiplier will go up with each purchase.', () =>{
    describe('As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
            underTest.stashDonutsForTesting();
        });
        it('should increase the cost of the second donut multiplier by an additional ten percent.', ()=>{
            underTest.buyDonutMultiplier();
            expect(underTest._donutMultiplierCount).toBe(1);
            underTest.buyDonutMultiplier();
            expect(underTest._donutMultiplierCount).toBe(2);
            expect(underTest._donutMultiplierCost).toBe(11);
            expect(underTest._donutCount).toBe(979);
            underTest.buyDonutMultiplier();
            expect(underTest._donutMultiplierCount).toEqual(3);
            expect(underTest._donutMultiplierCost).toBeCloseTo(12.1);
            expect(underTest._donutCount).toBe(966.9);
            underTest.recordClick();
            expect(underTest._donutCount).toBeCloseTo(968.628);
        });
    });
});
describe('I2:F3: Ensure that there are enough donuts to buy a Donut Multiplier.', () =>{
    describe('As the game designer, I want to ensure that players have to put the game into a proper state to be able to purchase a Donut Multiplier, so that the game has a challenge.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
        });
        it('Prevent the Donut Multiplier count from going up if there are not enough donuts to purchase a Donut Multiplier.', ()=>{
            underTest.buyDonutMultiplier();
            expect(underTest._donutMultiplierCount).toBe(0);
            underTest.stashDonutsForTesting();
            underTest.buyDonutMultiplier();
            expect(underTest._donutMultiplierCount).toBe(1);
            expect(underTest._donutCount).toBe(990);
        });
    });
});
describe('I2:F4: The first Donut Multiplier should increase the value of a click 1.2x.', () =>{
    describe('As a user, I want to make my clicks more powerful, so that I can make the work to get more Auto Clickers easier.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
        });
        it('Increase the amount of donuts added to the donut count by multiplying by 1.2 after the first Donut Multiplier is purchased.', ()=>{
            underTest.stashDonutsForTesting();
            underTest.buyDonutMultiplier();
            expect(underTest._donutMultiplierCount).toBe(1);
            underTest.recordClick();
            expect(underTest._donutCount).toBeCloseTo(991.2);
        });
    });
});
describe('I2:F5: The amount the subsequent Donut Multipliers click bonus will go up exponentially.', () =>{
    describe('As a CEO, I want my players hard earned Donut Multipliers to make a big impact, so that they keep playing the game.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
        });
        it('Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.', ()=>{
            underTest.stashDonutsForTesting();
            underTest.stashDonutMultipliersForTesting();
            expect(underTest._donutMultiplierCount).toBe(10);
            underTest.recordClick();
            expect(underTest._donutCount).toBeCloseTo(1006.192);
        });
    });
});
describe('I2:F6: The Donut Multipliers click bonus will apply to clicks from the Auto Clicker.', () =>{
    describe('As a user, I want to see my click investments work together to get me more donuts, so that I can have all the donuts.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
        });
        it('When an Add Auto Clickers event is executed, increase the value of each Auto Clicker by the amount of the Donut Multiplier.', ()=>{
            underTest.stashDonutsForTesting();
            underTest.buyDonutMultiplier();
            underTest.buyAutoClicker();
            expect(underTest._donutMultiplierCount).toBe(1);
            expect(underTest._donutCount).toBe(890)
            underTest.activateAutoClicker();
            expect(underTest._donutCount).toBeCloseTo(891.2);
            underTest.buyDonutMultiplier();
            expect(underTest._donutCount).toBe(880.2);
            expect(underTest._donutMultiplierCount).toBe(2);
            underTest.buyAutoClicker();
            expect(underTest._donutCount).toBe(770.2);
            expect(underTest._autoClickerCount).toBe(2);
        });
    });
});