//Type assertion
//it is used to specify a more specifi type
// sometimes we have info about the type of a value that typescript cannot know about
// For example if you are using document.getElementById, TS only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID
// in this situation you can use type assertion to specify a more specific type;

// const mycanvas = document.getElementById("main_canvas") as HTMLCanvasElement
// const mycanvas = < HTMLCanvasElement> document.getElementById("main_canvas")

type one = string;
type two = string | number;
type three = "string";

let a: one = "hello";
let b = a as two; // less specific
let c = a as three; // more specific
console.log(a);
console.log(b);
console.log(c);

let d =<one>`world`
let e = <string | number>`world`

const addOrConcat =(a:number,b:number,c:"add" |"concat"):number | string =>{
    if(c  ==="add"){
        return a+b
    }
    return ""+a+b
}

let myval :string = addOrConcat(2,2,"concat") as string
let myval2 :number = addOrConcat(2,2,"add") as number


let img= document.querySelector("img")
let ele= document.getElementById("#112s")
let myimg= document.getElementById("#img") as HTMLImageElement 
let myimg2= document.getElementById("#img")! as HTMLImageElement 
let myimg3= <HTMLImageElement >document.getElementById("#img")

// img?.src
img?.src
myimg.src
myimg2.src