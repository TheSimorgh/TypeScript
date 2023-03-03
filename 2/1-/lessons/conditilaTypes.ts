//value ===result ? true : false


// T extends U ? T1:T2


type Test<T>=T extends string ? true : false


interface UUuser {
    id:string
}

interface MMesage {
    id:number
}

function getId<T extends {id:any} >(obj:T):T extends {id:string} ?string:number {
    return obj.id
}
const rrr = getId({}as UUuser)
const rrr2 = getId({}as MMesage)



type NotFalst<T=null>=T extends (null | undefined | false | 0) ? never :T
let z: NotFalst<string> = "hello"