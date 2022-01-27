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
}

let point: Point;
point.draw();