class Point {
    x: number;
    y: number;
    draw() {
        //draw logic
        console.log('drawing')
    }

    getDistance(another: Point) {
        //get distance login
        console.log('get distance');
    }
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

let point: Point = new Point(1,3);
point.draw();