// Index Signatures
// if is usefful when we are creating object but you do not know the exact name of object key
// interface TransactionObj {
//     readonly [index: string]: number
    
//     //  [index: string]: number

// }

// interface TransactionObj{
//     Pizza:number,
//     Books:number,
//     Job:number,
// }

interface TransactionObj{
     [index: string]: number |string | number[] |string []| boolean
    // Pizza:number,
    // Books:number,
    // Job:number,
}

const todaysTransactions:TransactionObj={
    Pizza:-10,
    Books:-5,
    Job:50,
    isActive:true
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop:string = "Job"
console.log(todaysTransactions[prop]);


const todaysNet=(transactions:TransactionObj):number=>{
    let total=0;
    for(const transaction in transactions){
        total +=transactions[transaction]
    }
    return total 
}


console.log(todaysNet(todaysTransactions)
);
todaysNet.Pizza=40 // it is not allowed to asign because we used interface with read only attribute
console.log(todaysTransactions["Dave"]);


interface Student{
    [index: string]: number |string | number[] |string []|undefined| boolean
    name:string,
    GPA:number,
    classes?:number[],
    isActive?:boolean

}


const student :Student={
    name:"Jo",
    GPA:3.5,
    classes:[100,200,400]
}
console.log(student.country);

for(const key in student){
    console.log(`${key}`);
    console.log(`${key}: ${student[key]}`);
    console.log(`${key}: ${student[key as keyof Student]}`);
    
}

interface Student2{
    // [index: string]: number |string | number[] |string []|undefined| boolean
    name:string,
    GPA:number,
    classes?:number[],
    isActive?:boolean

}

const student2 :Student2={
    name:"AAAA",
    GPA:5,
    classes:[1000,10000,100000]
}
for(const key in student2){
    // console.log(`${key}`);
    // console.log(`${key}: ${student[key]}`);
    console.log(`${key}: ${student2[key as keyof Student2]}`);
    //key off create union type nad union type specific  string,number bolean literal
}

Object.keys(student2).map(key=>console.log(student2[key as keyof typeof student2]))
Object.keys(student2).map(key=>console.log(student2[key as keyof  Student2]))


const logStudentKey=(student:Student,key:keyof Student):void=>console.log(`Stundet ${key}: ${student[key]}`);

logStudentKey(student,"name")

//////////////
// interface Incomes{
//     [key:string]:number
//     // [key:string|number]:number|string
//     // [key:(string|number)[]]:(number|string)[]

// }


type Streams="salary"|"bonus"|"sidehustle"
type Incomes = Record<Streams,number>
const monthlyIncomes:Incomes={
    salary:500,
    bonus:100,
    sidehustle:250
}





for(const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes]);
    
}
// const III=(monthlyIncomes:Incomes):number=>{
//     let total=0;
//     for(const income in monthlyIncomes){
//         total +=monthlyIncomes[income]
//     }
//     return total 
// }
