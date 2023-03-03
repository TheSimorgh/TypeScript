let stringArr= ["1","2","3","four"]
let numbergArr= [1,3,46,8]
let guitars =["star","moong","sun",0o7]
let mixedData =["star","moong","sun",0o7,100,true,false]
stringArr[0]=2
numbergArr[0]="one"
guitars[0]=true
stringArr.push(23)
numbergArr.pull("gee")
guitars.shift(true)


guitars=stringArr

let test= [] //any type
let bands :string[]=[]
bands.push("AAA")
bands.push(1)


//TUPLE
let myTuple:[string,number,boolean]=["11",1,true]
let mixed=["jo",1,false] // (string | number | boolean)[]
mixed=myTuple
myTuple=mixed
let newMixed:(string | number | boolean)[]
newMixed=mixed
newMixed=myTuple
myTuple=newMixed
myTuple[2]="d"
myTuple[5]="d"

//OBJECTS

let myObj:object;
myObj=[];
console.log(typeof myObj);
myObj=bands


let examObje={
    prop1:"text",
    prop2:true,
}

examObje.prop1="jo"

examObje.prop1=1994

//TYPE
type employee= {
    name?:string,
    active?:boolean,
    age?:number,
    qualification?:(string | number)[]


}
let xxx:employee={
    name: "001",
    active: false,
    age: 0,
    qualification: [1,2,3,4]
}

let aaa:employee={
    name: "002",
    active: false,
    qualification: ["1",2,6,8,"34"]
}

xxx=aaa
//INTERFACE
interface Iemployee {
    name:string,
    active:boolean,
    age:number,
    qualification?:(string | number)[]


}
const eeee:Iemployee={
    name: "",
    active: false,
    age: 0
}
//ENUMS
enum Role{
    Doctor,Assistant,Nurse
}
enum GENDER{
    Male,Femal,Other,
}
enum Rank{
    A=86-100,
    B=71-85,
    C=55-70,
    D=40-54,
    E=0-40
}
interface Istaff {
    id:string | number
    name:string,
    active:boolean,
    age:number,
    qualification?:(string | number)[],
    role:Role,
    gender:GENDER,
    rank:Rank

}
let ggg:Istaff={
    name: "",
    active: false,
    age: 0,
    role: Role.Doctor,
    gender: GENDER.Male,
    rank: Rank.A,
    
    id: ""
}

//TYPE ALIAS 
type stringOrNUmber =string | number
type stringOrNUmberArray =(string | number)[]
type UserID=stringOrNUmber
interface IUserId=stringOrNUmber

type Guitarist ={
    name?:string,
    active:boolean,
    albums:stringOrNUmberArray,
    albums2:(string | number)[]
}
type clinic={
    name:string,
    address:string,
    phone:(string | number)[],
    service:(string)[],
    employee:(string)[],
    doctor_room:(string | number)[]
    rooms:number[]

}

let semrug:clinic={
    name: "",
    address: "",
    phone: [],
    service: [],
    employee: [],
    doctor_room: [],
    rooms: []
}