interface UserData {
  name: string;
  age: number;
}

const userrr: UserData = {} as UserData;
const userrr: UserData =<UserData> {} 

userrr.name = "323";
userrr.age = 445;



const poerson001 ={
    name:"AAA",
    surname:"BB"
}


const keys=Object.keys(poerson001)
const keys2=Object.keys(poerson001) as Array<keyof typeof poerson001 >
const keys3=<Array<keyof typeof poerson001 >>Object.keys(poerson001) 

keys2.forEach(k=>{
    poerson001[k]
})



const element =document.querySelector("name");
const element2 =document.querySelector("name") as HTMLInputElement
const {value}=element
const {value}=element2

type ErrorMessage = string | string[] | Error;
const apiError:ErrorMessage = JSON.parse(JSON.stringify(`[]`))

const formatedMessage = apiError.map(e=>e.toUpperCase())
const formatedMessage1 = (apiError as string[]).map(e=>e.toUpperCase())



const testt = {
    name:"USer",
    age:20
}


const testt2 = {
    name:"USer",
    age:20
} as const

const testt3 =<const> {
    name:"USer",
    age:20
} 



type U =typeof testt
type U2 =typeof testt2
type U3=typeof testt2

const month=["jan","feb","mar"] as const


for (let mon of month){
    console.log(mon);
    
}