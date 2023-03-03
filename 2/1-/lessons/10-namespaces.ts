//combinening  particular elementnts into one
///<reference path="./10.1-namespaces.ts"/>
{/*


type FormType=`inline`|"bloack"
type FormState=`active`|"disabled"
interface FormInfo{
    type:FormType
    state:FormState
}*/}

// class MyForm{

//     private type:FormType="inline"
//     private state:FormState="active"


//     constructor(public email:string){
//         this.email= email
//     }

//     getInfo(){
//         return {
//             type:this.type,
//             state:this.state
//         }
//     }

// }


namespace NForm{
    class MyForm{

        private type:FormType="inline"
        private state:FormState="active"
    
    
        constructor(public email:string){
            this.email= email
        }
    
        getInfo():FormInfo{
            return {
                type:this.type,
                state:this.state
            }
        }
    
    }
}
const cccc =new MyForm (`email.com`)
console.log(cccc.email);
console.log(cccc.getInfo);


// const SECRET:string ="123232"
// const PI=3.14
// const getPass =(name:string,age:number):string=>`${name} ${age}`
// const isEmpty = <T>(data:T):boolean=>!data



namespace Utils {
    export const SECRET: string = "123232";
    export const PI = 3.14;
    export const getPass = (name: string, age: number): string => `${name} ${age}`;
    export const isEmpty = <T>(data: T): boolean => !data;
   }
   

   const myPasss=Utils.getPass("gelll",13)


   const PI=3


import {getPass2,SECRET2} from "./10.1-namespaces";

const myPass2=getPass2