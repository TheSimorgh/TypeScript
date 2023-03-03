"use strict";
// Index Signatures
// if is usefful when we are creating object but you do not know the exact name of object key
// interface TransactionObj {
//     readonly [index: string]: number
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    isActive: true
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Job";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
todaysNet.Pizza = 40; // it is not allowed to asign because we used interface with read only attribute
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Jo",
    GPA: 3.5,
    classes: [100, 200, 400]
};
console.log(student.country);
for (const key in student) {
    console.log(`${key}`);
    console.log(`${key}: ${student[key]}`);
    console.log(`${key}: ${student[key]}`);
}
const student2 = {
    name: "AAAA",
    GPA: 5,
    classes: [1000, 10000, 100000]
};
for (const key in student2) {
    // console.log(`${key}`);
    // console.log(`${key}: ${student[key]}`);
    console.log(`${key}: ${student2[key]}`);
    //key off create union type nad union type specific  string,number bolean literal
}
Object.keys(student2).map(key => console.log(student2[key]));
Object.keys(student2).map(key => console.log(student2[key]));
const logStudentKey = (student, key) => console.log(`Stundet ${key}: ${student[key]}`);
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
// const III=(monthlyIncomes:Incomes):number=>{
//     let total=0;
//     for(const income in monthlyIncomes){
//         total +=monthlyIncomes[income]
//     }
//     return total 
// }
