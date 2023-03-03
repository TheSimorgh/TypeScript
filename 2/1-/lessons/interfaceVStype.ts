interface UserA {
  name: string;
  age: number;
}
type UserB = {
  name: string;
  age: number;
};

type UserD = {
  name: string;
  age: number;
  location: string;
};

interface UserC extends UserD {}
const user01: UserA = {
  name: "",
  age: 0,
};
const user02: UserB = {
  name: "",
  age: 0,
};
const user03: UserC = {
  name: "",
  age: 0,
  location: "",
};

//interface sytax similar declaring class sytanx
//type syntaxs similar to object declaring

type SumB = (a: number, b: number) => number;
interface SumA {
  (a: number, b: number): number;
}
const sum: SumB = (a, b) => a + b;
const sum2: SumA = (a, b) => a + b;

type UniqueID = string;
type UniqueStr = "AAA" | "BBB" | "CCC";

interface UserI {
  id: UniqueID;
  str: UniqueStr;
}

const ggg: UserI = {
  id: "",
  str: "AAA",
};

type NamesA = string[];
interface NamesB {
  [key: number]: string;
}

//Tuple works only in type

type State=[number,(n:number)=>number]
const s:State=[]


//Union Type

type A={
    age:number;
}

type B={
    str:string;
}

type CC= A | B

type DD=number | string | string[]
type CCC="AA" | "BB" | "CC"

interface UUser {
    name:string,age:number
}



type Nullablee <T>=T | null | undefined

const userr:Nullablee<User>=null




