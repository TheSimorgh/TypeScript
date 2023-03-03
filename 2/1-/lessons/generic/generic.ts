type V<T>=T

type N<T>=V<string>
type L<T>=V<"XXX">
type P<T>=V<number>


type O<T extends string> =T
type M <T>= T extends string ? string :never



interface IName{
  name:string
}

function printName<T extends IName>(person:T){
  console.log(person.name);
  
}

printName({name:"AAA",age:343})
printName({age:34}) // error 


type MyArr<T>=T[]
const arra:MyArr<string>=["AA","BB"]
function echo<T>(x:T):T{
  return x
}


const result1 = echo<string>("XXXXXX")


class List<T>{
  
  constructor(public eles:T[]){

  }
  add(ele:T){
    this.eles.push(ele)
  }
  get():T[]{
    return this.eles
  }

}


const list09 = new List([23,4,5,6,7])
list09.add(1000)
list09.get()


interface IList<T>{
  elements:T[],
  add(element:T):void
  // new():
}



class List22 implements IList<string>{
 
  constructor(public elements:string[]){}
  add(element: string): void {
    this.elements.push(element)
    
  }

}

interface AA{
  a:string,
  b:number,
  c:boolean
}

type BB =keyof AA

function getProperty<ObjectType,KeyType extends keyof ObjectType>(object:ObjectType,key:KeyType){
  return object[key]
}
const resultus7=getProperty({name:"AA",age:324},"name")
const resultus9=getProperty({name:"AA",age:324},"group")


const ar1 = [1,"3",false]
type AAAAA<T>=T extends (infer U)[]? U:never
type BBBBBB = typeof ar1
type CCCCC=AAAAA<BBBBBB>


const persona = {name:"AA",age:34}
type AType<T>=T extends{[key:string]:infer U}? U: never

type K =typeof persona
type J =AType<K>


class Cat2{
  say():string{return "meow"}
}
class Dog2{
  say():string{return "woof"}
}


interface IClass<T>{
  new():T
}

function createObject<T>(c:IClass<T>):T{
  return new c()
}



const pet = createObject(Cat2)




function getRandomEle<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.lenght);

  return items[randomIndex];
}

const el = getRandomEle([1, 243, 5, 6, 7, 4]);
const el2 = getRandomEle(["2", "65", "6"]);
const el3 = getRandomEle(["2", "65", "6", 1, true]);

function merge<T, R>(o1: T, o2: R): T & R {
  return { ...o1, ...o2 };
}

const r1 = merge([2, 4, 5, 6, false, "2"], ["3", 1, "5", true]);

async function fakeRequest() {
  return 2;
}

const bb: Promise<number> = fakeRequest();

// type OBJ = {
//     [key:string]:number | number [] | string | string [] | boolean
// }

type OBJ = {
  [key: string]: string;
};
type OBJ2 = Record<string, number | number[] | string | string[] | boolean>;

function len<T extends { length: number }>(collection: T) {
  return collection.length;
}

const r01 = len("hello");
const r2 = len([1, 2, 43, 5]);
const r3 = len(1);

// class DataCollection {
//     constructor (public data:any[]){}
//     search(id:string){
//         return this.data.find(d=>d.id===id)
//     }
// }

class DataCollection<T extends { id: string }> {
  constructor(public data: T[]) {}
  search(id: string): T | null {
    return this.data.find((d) => d.id === id) || null;
  }
}

type Userrr = {
  id: string;
  name: string;
};

type Message = {
  id: string;
  text: string;
};

const messageData: Message = { id: "1", text: "1" };
const users = new DataCollection<Userrr>([{ id: "1", name: "ss" }]);
const message = new DataCollection([messageData]);

function getValue<T extends object, U extends keyof T>(obj: T, prop: U) {
  return obj[prop];
}

const r5 = getValue({ name: "Max", age: 2 }, "age");

function getKey<T extends object, U extends keyof T>(
  obj: T,
  value: T[U]
): U | null {
  const key = (Object.keys(obj) as Array<U>).find((k) => obj[k] === value);
  return key || null;
}

const r52 = getKey({ name: "Max", age: 2 }, "Max");

function patchField<T extends object, U extends keyof T, V extends T[U]>(
  obj: T,
  field: U,
  val: V
) {}

patchField({ f: "1" }, "f", "3");

function format<T = string>(s?: T): T | undefined {
  return s;
}

class ArrayOFNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOFStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOFAnthing<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const bmbmb = new ArrayOFAnthing<number>([1, 2, 3, 4, 5, 6]);

function fillArray<T>(len: number, elem: T): T[] {
  return new Array<T>(len).fill(elem);
}

const newArr = fillArray<string>(10,"*")


function printArray<T>(arr:T[]):void{
  arr.map(e=>{
    console.log(e)
  }
  )

  for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
    
  }
}

printArray<number>([1,2,5,4,5,6,7])