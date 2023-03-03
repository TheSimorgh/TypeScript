interface IUser {
    // [index: string]: number |string | number[] |string []| boolean
    user:string | number |undefined
    age:number
    address?:object
    active?:boolean
    skills?:Array<string | number>
}
enum EGender {
    male,
    female,
    other
}

type TUser= {
    
    user:string | number |undefined
    age:number
    address?:object
    active?:boolean
    skills?:Array<string | number>
    gender?:EGender
}


let user :{name:string | number, age :number}={name:"aaa",age:1}
let user2:IUser={
    user: undefined,
    age: 0,
    skills:[1,3,4,5,6,]
}
let user3:TUser={
    user: undefined,
    age: 0,
    skills: [1, 3, 4, 5, 6,],
    gender: EGender.male
}