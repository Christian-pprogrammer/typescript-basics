class Property {
    constructor(private _a: number, private _b: number) {

    }
    get a() {
        return this._a;
    }
    get b() {
        return this._b;
    }
    set a (a: number) {
        this._a = a;
    }
    set b (b: number) {
        this._b = b;
    }
}
let property1 = new Property(12,34);
console.log(property1.a);