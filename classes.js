var Point = /** @class */ (function () {
    function Point() {
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
var point = new Point();
point.draw();
