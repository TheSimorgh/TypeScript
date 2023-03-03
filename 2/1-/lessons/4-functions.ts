function add(a:number,b:number):number {return a+b}

function toUppercase(a:string):string {return a.trim().toUpperCase()}

interface IMyPosition{
    x?:number | undefined
    y?:number | undefined

}
interface IMyPositionDefault extends IMyPosition{
    default:string
}
function position (): IMyPosition
// function position (a:number):IMyPositionDefault 
function position (a:number,b:number):IMyPosition
function position (a:number,b:number):IMyPosition

function position(a?:number,b?:number){
    if(!a && !b){
        return {x:undefined,y:undefined}
    }
    if(a && !b){
        return {x:a,y:undefined,default:a.toString()}
    }
    return {x:a,y:b}
}
console.log(`empty`, position());
// console.log(`one Param`, position(42));
console.log(`two Param`, position(10,20));


const createSkills=(name:string,...skills:string[])=> `${name}: ${skills.join()}`
console.log( createSkills("Jo","JS","TS","NODE"));


const createPassword =(name:string | number,age:number|string,...skills:Array<string | number>):string=>`${name}${age}${skills}`


const createEmptyObj = ():object=> ({})


//VOID

const greetUser =():void=> console.log("hellos")

const msg="gelll"
const error =(msg:string):never=>{ throw new Error(msg)}

const infinLoop=():never=>{
    while(true){
        
    }
}