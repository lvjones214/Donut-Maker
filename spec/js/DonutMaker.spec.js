let underTest;
describe('FEATURE : Have a way to count donuts.', () =>{
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
describe('FEATURE:Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () =>{
    describe('Can retrieve an Auto Clicker count.', () => {
        beforeEach(()=>{
            underTest = new DonutMaker;
        });
        it('Should have an AutoClicker that clicks by itself', () =>{
            underTest.recordClick();
            underTest.recordAutoClick();
            expect(underTest.totalDonutCount).toBe(101);
        }); 
        it('Should subtract 100 donuts when buy AutoClicker', () =>{
            underTest.buyAutoClicker();
            expect(underTest._totalDonutCount).toBe(-100);
        });  
    });
});
describe('FEATURE : The cost of each Auto Clicker will go up with each purchase.', () =>{
    describe('Increase the cost of the second Auto Clicker by an additional ten percent.', () => {
        it('should increase cost of second AutoClicker by 10%',() =>{
            underTest.buyAutoClicker();
            expect(underTest._autoClickerCount).toBe(1);
            underTest.buyAutoClicker();
            expect(underTest._autoClickerCount).toBe(2);
            expect(underTest._totalDonutCount).toBe(-210);
        });
    })
})

