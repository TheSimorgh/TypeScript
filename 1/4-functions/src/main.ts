//Functions
type stringOrNUmber = string | number;
enum Gender {
  male,
  female,
}
type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
  albums2: stringOrNUmber[];
  gender: Gender;
  gender2: "Male" | "Female";
};
let xxx: Guitarist = {
  active: false,
  albums: [],
  albums2: [],
  gender: Gender.male,
  gender2: "Male",
};
const add = (a: number, b: number): number => {
  return a + b;
};
const add2 = (a, b): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
interface mathFunction2 {
  (a: number, b: number): number;
}
let myFunc: mathFunction = (a, b) => {
  return a * b;
};

logMsg(myFunc(5, 6));
logMsg("Hello");

// optinal parametrs
const addAll = (a: number, b: number, c?: number,d?:number): number => {
  if (typeof c !== `undefined`) {
    return a + b + c;
  }else if(typeof d !== `undefined`){
    return a + b + d;
  }else if(typeof c && d !=="undefined"){
    return   a+b+c+d
  } else{
    return a + b;
  }

};


const sumAll=(a:number,b:number,c:number):number=>{
    return a+b+c
}
//DEFAULT PARAMETRS
const sumAll2=(a:number=10,b:number,c:number):number=>{
    return a+b+c
}
logMsg(addAll(1,2,3,5))
logMsg(sumAll(1,2,3))
logMsg(sumAll2(undefined,2,3))

//REST PARAMETRS

const total2=_(...nums:number[]):number=>{
    return nums.reduce((prev:number,curr:number)=>prev+curr)
}
logMsg(total2(1,3,4,5,6))

const total=_(a:number,...nums:number[]):number=>{
    return a+nums.reduce((prev:number,curr:number)=>prev+curr)
}

logMsg(total(10,20,30,40))


const gretting=(message:string,...names:string[]):string=>{
    return message + " "+names.join(", ")+"!";
}
gretting("Hello","Steve","Bill") // hello Steve Bill
gretting("Hello") //helo


const createError =(errMsg:string):never=>{
    throw new Error(errMsg)
}
//infinite loop
const infinite=()=>{
    let i:number=1
    while(true){
        i++
        // if(i>100)break
    }
}

type NumOrString=string |number
const numberOrString=(value:number | string):string | number=>{
    if (typeof value==="string") return "string"
    if (typeof value==="number") return "number"
    return createError("this is Error")

}

const numberOrString2=(value:number | string):NumOrString=>{
    if (typeof value==="string") return "string"
    if (typeof value==="number") return "number"
    return createError("this is Error")

}

const isNumber =(value:any):boolean=> typeof value === "number" ? true:false
const isString=(value:any):boolean=>typeof value ==="string"?true:false
 
const numberOrString3=(value:number | string):NumOrString=>{
    if (isString(value)) return "string"
    if (isNumber(value)) return "number"
    return createError(`This is Error ${value}`)

}