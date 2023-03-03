

type Roles="Admin" | "Moderator" | "User"

const currRole:Roles="Admin"

interface UUser{
    name:string,
    age:number
}


type UUserKeys =keyof UUser;
type UUserKeys2="name"|"age"

let prop:UUserKeys;
prop="1232"


class PPerson {
    name:string=""
    age:number=0
}


let personField:keyof PPerson="name"



const mesg={
id:1,
text:"2"
,age:1
}


const t = typeof mesg

type MessageTypee=typeof mesg
type MessageKeys=keyof MessageTypee

const userMesg:MessageTypee={
    id: 0,
    text: "",
    age: 0
}

enum Colors {
    white="white",
    black="black"
}

type AvailableColors = keyof typeof Colors
let color:AvailableColors="black"


const formData ={
    fname:"JO",
    lname:"Do",
    age:1
}

// interface ValidationRes{
//     fname:string;
//     lname:string;
//     age:number
// }
type ValidationRes ={
    [key in keyof typeof formData]:string | number
}



declare function validate <T>(data:T):ValidationRes
const re=validate(formData)


declare function validate2 <T>(data:T): {[key in keyof  T]:string | number}
const re2=validate<typeof formData>(formData)

