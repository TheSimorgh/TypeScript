//base structure of Decoreator it is function it can be attached to class methods variable propert  and parametrs
//types of decorators propert method class accessor
//class decorator
const logClass = (constructor: Function) => {
  console.log(constructor);
};
//class decorator
@logClass //apply decorator for calss
class User23 {
  constructor(public name: string, public age: number) {}
  public getPass(): string {
    return `${this.name} ${this.age}`;
  }
}

const logProperty = (target: Object, propertyKey: string | symbol) => {
  console.log(propertyKey);  //result of call : secret
};

const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(propertyKey); //result of call : getPAss
};

//get set Decorator
const logSet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(propertyKey); //result of call : myage
};

// all in one

@logClass //apply decorator for calss
class User24 {
  @logProperty //apply property decorator
  secret: number;
  constructor(public name: string, public age: number, secret: number) {
    this.secret = secret;
  }
  @logMethod //apply method decorator
  public getPass(): string {
    return `${this.name} ${this.age}`;
  }

  @logSet
  set myAge(age: number) {
    this.age = age;
  }
}

//Factory Decorator


function factory (value:any){ //factory
    return function (target:any){//decorator
        console.log(target);//decorator logic
        
    }
}


//apply factory decorator

const enumerable =(value:boolean){
    return (target:any,propertyKey:string | symbol,descriptor:PropertyDescriptor)=>{descriptor.enumerable=value}
}

class User99 {
    constructor(public name: string, public age: number) {}
    @enumerable(false)
    public getPass(): string {
      return `${this.name} ${this.age}`;
    }
}


//decorator composition syntax
//apply decorators (one line)
@f @g x
// apply decorators (mutile lines)
@f @g x