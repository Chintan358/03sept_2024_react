
class Pen
{
    a = 10;
    b = 20;

    constructor(x,y){
       // console.log("constructor calling..");
       this.a = x;
       this.b = y;
    }

    display()
    {
        console.log("Function calling...");
        console.log(this.a+" "+this.b);   
    }
}

// p1 = new Pen(100,200)
// p1.display()

// p2 = new Pen(30,62);
// p2.display()

date = new Date(1727492077894)
console.log(date.getFullYear());
