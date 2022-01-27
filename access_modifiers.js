var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    MyPoint.prototype.getX = function () {
        console.log(this.x);
    };
    return MyPoint;
}());
var p = new MyPoint(12, 3);
p.getX();
