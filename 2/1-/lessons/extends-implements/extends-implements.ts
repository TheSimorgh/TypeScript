interface IPersonEIP{
    name:string;
    sname:string;
 
}

interface AAAA{
    desc:string;
    quantity:number;
 
}

interface IPersonEXBirthDay  {
    birthday:string | number;
    age:number;
}



interface IEmployeeEX extends IPersonEIP, IPersonEXBirthDay{
    height:number;
    qualification:Array<string>

}

const jusEmployee:IEmployeeEX={
    height: 0,
    qualification: [],
    name: "",
    sname: "",
    birthday: "",
    age: 0
}


class ClassEI implements IEmployeeEX {
   public height: number | undefined;
   public qualification: string[] ;
   public name: string | undefined;;
   public sname: string | undefined;;
   public birthday: string | number | undefined;
   public age: number | undefined;
   constructor(props:IEmployeeEX){
    this.height=prop.height
    
   }
    
}


class EEEE implements IEmployeeEX,AAAA{
    desc: string;
    quantity: number;
    height: number;
    qualification: string[];
    name: string;
    sname: string;
    birthday: string | number;
    age: number;
    
}

class AAAAClass {
    name:string
    constructor (name:string){
        this.name=name
    }
}

class CCCClass {
    info:string
    constructor (info:string){
        this.info=info
    }
}



class BBBB implements AAAAClass,CCCClass {
    info!: string;
    name!: string;
    constructor (name:string,info:string){
        this.info=info
        this.name=name
    }
    
}