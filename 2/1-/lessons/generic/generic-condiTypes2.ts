type SomeType=number;
type MyCondType =SomeType extends string ? string :null


function someFunc<T>(value:T){
    type A=T extends boolean ? "A":T extends string ? "B":T extends number ? "Number" :null
    const somOtherFunc=(someArg:T extends boolean ? "Type_A":"Type_B")=>{

    }
    return somOtherFunc
}

const resultus = someFunc("as")
const resultus2 = someFunc(true)


type StrOrNot <T> =T extends string ? string : never;
type AUnion = string | boolean | never


type ResType =   Exclude <"a"|"b"|"c","a"|"b">
/*
a extends a | b  ? never : a =>never
b extends a | b  ? never : b =>never
c extends a | b  ? never : c =>c

*/


type MyTypees<T>=T extends string | number ? T: never
type MyResult = MyTypees<string | number | boolean>


type MyTypees2<T>= (()=>T ) extends ()=>string | number ? T: never
type MyTypees3<T>= (()=> string | number | boolean) extends ()=>string | number ? T: never

type MyResult2 = MyTypees<string | number | boolean>



type MyTypees5<T>= [string | number] extends [string | number] ? T :never
type MyTypees6<T>= (()=> string | number | boolean) extends ()=>string | number ? T: never



// type SomeType =T extends infer U ? U: Y

/*
T extends {a:infer A ; b:infer B}? A &B :any
T extends (a:infer Arg)=>any? Arg:any
*/