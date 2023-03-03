const arrayOfNums: Array<number> = [1, 2, 3, 4, 5, 6];
const arrayOfStr: Array<string> = ["12", "22", "33", "44", "55", "66"];

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}
reverseArray(arrayOfNums);
reverseArray(arrayOfStr);

const cars: string[] = ["AAA", "BBB"];
const cars2: Array<string> = ["AAA", "BBB"];
const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("24");
  }, 2000);
});

promise.then((data) => console.log(data));

const promise2 = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 2000);
});

promise.then((data) => console.log(data.toLowerCase().trim()));
promise2.then((data) => console.log(data));


function mergerObject<T,K>(a:T,b:K):T&K{
    return Object.assign({},a,b)
}

const merged= mergerObject({name:"aaa"},{age:25})
console.log(merged);
console.log(merged.name);
const merged2= mergerObject({model:"aaa"},{brand:25})
console.log(merged2);
console.log(merged2.brand);
const merged3= mergerObject("aaa",25)
console.log(merged3);


function mergerObject2<T extends object,K extends object>(a:T,b:K):T&K{
    return Object.assign({},a,b)
}

const merged4= mergerObject("aaa","25")

const merged5= mergerObject(1,4)
console.log(merged5);

interface ILength{
    length:number
}

function withCount<T extends ILength>(value:T):{value:T,count:string}{
    return {
        value,
        count : `${value.length}`
    }
}
////////////////////////////////////////////

interface IPerson {
    [key:string]:string | number | undefined
}
const person:IPerson={
    name:"JO",
    age:20,
    
}
// function getObjectValue(obj,key){
//     return obj[key]
// }

// console.log(getObjectValue(person,"name"));
// console.log(getObjectValue(person,"age"));

// function getObjectValue2<T extends IPerson, R >(obj:T,key:string){

function getObjectValue2<T extends IPerson, R extends keyof T>(obj:T,key:R){
    return obj[key]
}

console.log(getObjectValue2(person,"name"));
console.log(getObjectValue2(person,"age"));

// class Collection <T extends number | string | boolean> {
class Collection <T> {
    // private items:T[]
    constructor(private items:T[]=[]){

    }
    add(item:T){
        this.items.push(item)
    }
    remove(item:T){
        this.items=this.items.filter(i=>i !==item)
    }
    get Items():T[]{
        return this.items
    }
}

const numbers = new Collection <number> ([1,2,43,5,6])
numbers.add(100)
numbers.remove(1)
console.log(numbers.Items);

const str = new Collection <string> (["1","2","43","5","6"])
str.add("100")
str.remove("1")
console.log(str.Items);

const obj=new Collection ([{a:1},{b:2}])



interface Car{
    brand:string
    year:number
}

function createAndValidate (brand:string,year:number ):Car{
    const car :Partial<Car>={}

    if(brand.length>3){
        car.brand=brand
    }
    if(year>3300){
        car.year=year
    }
    return car as Car
}

const vehicle2:Readonly<Array<string>>=["Ford","Audi"]

const vehicle:Array<string>=["Ford","Audi"]
// vehicle.shift("1")