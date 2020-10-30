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
            expect(underTest.donutCount).toBe(10);
        });
    });
});
describe('I2:F1: Be able to purchase the first Donut Multiplier with 10 clicks from your click count.', () =>{
    describe('As a user, I want to make my clicks more powerful, so that I can make the work to get more Auto Clickers easier.', () =>{
        beforeEach(()=>{
            underTest = new DonutMaker;
        });
        it('should Can retrieve a Donut Multiplier count.', ()=>{
            underTest.donutMultiplier();
            underTest.recordClick();
            expect(underTest.donutCount).toBe(1.2);
        });
    });
});