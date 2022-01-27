var Property = /** @class */ (function () {
    function Property(_a, _b) {
        this._a = _a;
        this._b = _b;
    }
    Object.defineProperty(Property.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            this._a = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (b) {
            this._b = b;
        },
        enumerable: false,
        configurable: true
    });
    return Property;
}());
var property1 = new Property(12, 34);
console.log(property1.a);
