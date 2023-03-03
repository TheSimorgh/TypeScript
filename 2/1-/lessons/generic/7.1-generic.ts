
const getter =(data:any):any=>data;
getter(10).length //undefined
getter("test").length //4


const getter2=<T>(data:T):T=>data

function getter3 <T>(data:T):T{
    return data;
}


const getter4=<T> (data:T)=>data;

getter4(10).length; //propety length does not exist 
getter4("test").length

const getter5 =(data:number):number=> data;
getter5(10).length //Property length doesno tot exsit on type "10

const getter6 =(data:string):string=> data;
getter6("test").length //5

type t={
    x:(string | number) []
  

}
const list : t = [23232,"3434",343432,5454,32423]

const list2:Array<number>=[12,4,5,66,7]


class User001 {
    constructor (public name:string,public age:number){

    }

    public getPass():string {
        return `${this,name} ${this.age}`
    }
}


class User002 <T> {
    constructor (public name:T,public age:T){

    }

    public getPass():string {
        return `${this.name} ${this.age}`
    }
}


class User003 <T,R  > {
    constructor (public name:T,public age:R){

    }

    public getPass():string {
        return `${this.name} ${this.age}`
    }

    public getSecret():number{
        return this.age**2;
    }
}


const y = new User003("111",1)
const y1 = new User003("111","11")
const y2 = new User003(1,1)
const y3 = new User003(1,"22")


class User004 <T,R extends number > {
    constructor (public name:T,public age:R){

    }

    public getPass():string {
        return `${this.name} ${this.age}`
    }

    public getSecret():number{
        return this.age**2;
    }
}


const y4 = new User004("111",1)
