class MyPoint {
    constructor(private x: number, private y: number) {

    }
    getX() {
        console.log(this.x)
    }
}
 
let p = new MyPoint(12,3);
p.getX();
