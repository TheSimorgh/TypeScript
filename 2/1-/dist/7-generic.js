"use strict";
const arrayOfNums = [1, 2, 3, 4, 5, 6];
const arrayOfStr = ["12", "22", "33", "44", "55", "66"];
function reverseArray(arr) {
    return arr.reverse();
}
reverseArray(arrayOfNums);
reverseArray(arrayOfStr);
const cars = ["AAA", "BBB"];
const cars2 = ["AAA", "BBB"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("24");
    }, 2000);
});
promise.then((data) => console.log(data));
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(100);
    }, 2000);
});
promise.then((data) => console.log(data.toLowerCase().trim()));
promise2.then((data) => console.log(data));
function mergerObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergerObject({ name: "aaa" }, { age: 25 });
console.log(merged);
console.log(merged.name);
const merged2 = mergerObject({ model: "aaa" }, { brand: 25 });
console.log(merged2);
console.log(merged2.brand);
const merged3 = mergerObject("aaa", 25);
console.log(merged3);
function mergerObject2(a, b) {
    return Object.assign({}, a, b);
}
const merged4 = mergerObject("aaa", "25");
const merged5 = mergerObject(1, 4);
console.log(merged5);
function withCount(value) {
    return {
        value,
        count: `${value.length}`
    };
}
const person = {
    name: "JO",
    age: 20,
};
// function getObjectValue(obj,key){
//     return obj[key]
// }
// console.log(getObjectValue(person,"name"));
// console.log(getObjectValue(person,"age"));
// function getObjectValue2<T extends IPerson, R >(obj:T,key:string){
function getObjectValue2(obj, key) {
    return obj[key];
}
console.log(getObjectValue2(person, "name"));
console.log(getObjectValue2(person, "age"));
// class Collection <T extends number | string | boolean> {
class Collection {
    // private items:T[]
    constructor(items = []) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        this.items = this.items.filter(i => i !== item);
    }
    get Items() {
        return this.items;
    }
}
const numbers = new Collection([1, 2, 43, 5, 6]);
numbers.add(100);
numbers.remove(1);
console.log(numbers.Items);
const str = new Collection(["1", "2", "43", "5", "6"]);
str.add("100");
str.remove("1");
console.log(str.Items);
const obj = new Collection([{ a: 1 }, { b: 2 }]);
function createAndValidate(brand, year) {
    const car = {};
    if (brand.length > 3) {
        car.brand = brand;
    }
    if (year > 3300) {
        car.year = year;
    }
    return car;
}
const vehicle2 = ["Ford", "Audi"];
const vehicle = ["Ford", "Audi"];
// vehicle.shift("1")
//# sourceMappingURL=7-generic.js.map