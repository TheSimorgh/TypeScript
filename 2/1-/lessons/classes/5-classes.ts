 class Typescript{
    version:string |number
    constructor(version:string | number){
        this.version=version
    }
    info(name:string ){
        return `${name}: Typescript version is ${this.version}`
    }
 }


//  class Car {
//     readonly model:string
//     readonly numberOfWheels:number=4

//     constructor(themodel:string){
//         this.model=themodel
//     }
//  }

class Car {
    readonly numberOfWheels:number=4

    constructor(readonly model:string){
        this.model=model
    }
 }

 class Animal{
    //thre are 3 types of modficaors of class prote pub=default=if no any modife private
    protected voice:string=""
    public color:string="black"
    private body:string="organic"
    private go(){
        console.log(`go`);
        
    }

 }

 class Cat extends Animal{
    public name:string
    constructor(name:string){
        super()
        this.name=name
    }
    public setVoice (voice:string):void{ this.voice = voice}
    public getVoice ():void{ this.voice}
    public getInfo ():void{   `${this.name} ${this.voice} ${this.color}`}

 }


 const cat =new Cat(`bars`)
 cat.setVoice("meow")
 cat.getInfo()


 abstract class Component{
    abstract render():void
    abstract info():string
 }

 class AppComponent extends Component {
    info(): string {
        return "this is info"
    }
    render(): void {
        console.log("Hello");
        
    }
 }

 const x = new AppComponent
 x.info()
 x.render()
//  interface TUnion{
//     [index:string]:string | number |undefined|boolean;

//  }

 interface TUnion{
    [index:string]:string | number |boolean|undefined;
    // name:string,nickname:string,age:number,pass:string
 }
 interface TUnion2{
    // [index:string]:string | number
    name:string,nickname:string,age:number,pass:string
 }
 
 class Human {
    public name: TUnion
    private nickname: TUnion
    protected age:TUnion
    readonly pass:TUnion
    
    constructor (name:TUnion,nickname:TUnion,age:TUnion,pass:TUnion){
        this.name=name;
        this.nickname=nickname;
        this.age=age;
        this.pass=pass;
    }




 }


 //minimizing
 class Human2 {
    
    private sec:number=200
    static secret=122333
    constructor (public name:string,public nickname:string,public age:string | number,public pass:string | number){

    }
    public  secNum():number {return this.sec}
    public get num():void {return console.log(`${this.sec}`);
    }
    public set setNum(n:number){ this.sec=n}
    public seNum2(n:number){this.sec=n}

    public getInfo():string{
        return `${this.name} ${Human2.secret} ${this.nickname} ${this.num} ${this.sec} ${this.age}`
    }




 }

 const xx= new Human2 ("xxx","x11",23,3232)

 xx.getInfo()
 class Human3 extends Human2{
    name:string="sss"
    constructor(age:number){
    super(name,age)
    }
 }



 abstract class User1{
    constructor(public names:string,public age:number){

    }
    greet():void{
        console.log(this.names);
        
    }

    abstract getPass():string
 }


 class Yaxx extends User1 {
    names:string="ssss";
    constructor(names,age){
        super(age)
        this.names=names
    }
 }