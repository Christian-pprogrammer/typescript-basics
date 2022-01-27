var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        //draw logic
        console.log('drawing');
    };
    Point.prototype.getDistance = function (another) {
        //get distance login
        console.log('get distance');
    };
    return Point;
}());
var point = new Point(1, 3);
point.draw();
