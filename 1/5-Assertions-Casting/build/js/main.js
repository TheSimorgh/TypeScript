"use strict";
//Type assertion
//it is used to specify a more specifi type
// sometimes we have info about the type of a value that typescript cannot know about
// For example if you are using document.getElementById, TS only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID
// in this situation you can use type assertion to specify a more specific type;
let a = "hello";
let b = a; // less specific
let c = a; // more specific
console.log(a);
console.log(b);
console.log(c);
let d = `world`;
let e = `world`;
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myval = addOrConcat(2, 2, "concat");
let myval2 = addOrConcat(2, 2, "add");
let img = document.querySelector("img");
let ele = document.getElementById("#112s");
let myimg = document.getElementById("#img");
let myimg2 = document.getElementById("#img");
let myimg3 = document.getElementById("#img");
// img?.src
img === null || img === void 0 ? void 0 : img.src;
myimg.src;
myimg2.src;
