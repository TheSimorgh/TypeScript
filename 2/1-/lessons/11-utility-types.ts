
//Readonly<T>
interface User000 {
    name:string
}


const user666:Readonly<User000>={
    name:"AXXSS"
}

user666.name="/23232" //errror cannot re assign cause readonly proper


//Required <T>

interface Props {
    a?:string;
    b?:number;
}

const obj2:Props={a:"43"};
const obj4:Required <Props>={a:"43"}; //b is required

// Record <K,T>

interface PageInfo{
    title:string;
}
type Page ='home' |'about' | 'contact'


const xxx : Record<Page,PageInfo>={
about:{title:`about`},
contact:{title:`contact`},
home:{title:`home`},
}


//Pick <T,K>

interface Todo{
    title:string;
    description:string;
    completed:boolean;
}


type TodoPreview = Pick <Todo,"title"| "completed">

const todo:TodoPreview = {
    title:"Clean room",
    completed:false,
}

//Omit <T,K>
type TodoPreview2 = Omit <Todo,"description">

const todo2:TodoPreview2 = {
    title:"Clean room",
    completed:false,
}


// Exclude<T, U>
type T0 = Exclude<"a" | "b" | "c", "a">;                      // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;                // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

// Extract<T, U>
type T0 = Extract<"a" | "b" | "c", "a" | "f">;                // "a"
type T1 = Extract<string | number | (() => void), Function>;  // () => void

// NonNullable<T>
type T0 = NonNullable<string | number | undefined>;   // string | number
type T1 = NonNullable<string[] | null | undefined>;   // string[]

// ReturnType<T>
declare function f1(): { a: number, b: string };

type T0 = ReturnType<() => string>;                                  // string
type T1 = ReturnType<(s: string) => void>;                           // void
type T2 = ReturnType<(<T>() => T)>;                                  // {}
type T3 = ReturnType<(<T extends X, X extends number[]>() => T)>;    // number[]
type T4 = ReturnType<typeof f1>;                                     // { a: number, b: string }
type T5 = ReturnType<any>;                                           // any
type T6 = ReturnType<never>;                                         // any
type T7 = ReturnType<string>;                                        // Error
type T8 = ReturnType<Function>;                                      // Error

// InstanceType<T>
class C {
    x = 0;
    y = 0;
}

type T0 = InstanceType<typeof C>;     // C
type T1 = InstanceType<any>;          // any
type T2 = InstanceType<never>;        // any
type T3 = InstanceType<string>;       // Error
type T4 = InstanceType<Function>;     // Error