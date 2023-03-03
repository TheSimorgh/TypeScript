class Coder {
  //   name: string;
  //   music: string;
  //   age: number;
  //   lng: string;
  secongLng!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lng: string="typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lng = lng;
  }
  public getAge(){
    return `Hello ${this.age}`
  }
  public getLng(){
    return `LNG ${this.lng}`
  }
}

const Dave = new Coder("dave","classic",55)
console.log(Dave.getAge());
console.log(Dave.getLng());
console.log(Dave.age);
console.log(Dave.lng);

class WebDev extends Coder {
    constructor (
        public computer:string,
        name:string,
        music:string,
        age:number,
    ){
        super(name,music,age)
        this.computer=computer
    }
}


interface Musician {
    name:string,
    instrument:string,
    play (action:string):string
}

class Guitarist2 implements Musician{
    name:string
    instrument: string; 
    song:string;
    constructor (name:string,instrument:string,song:string){
        this.name=name
        this.instrument=instrument
        this.song=song

    }
    play(action: string): string {
        return `Guitarist ${this.name} ${action}is playing ${this.song} with ${this.instrument}`
    }
}

const Page = new Guitarist2("Jo","piano","Spring ")
console.log(Page.play("Hello"));


class Peeps {
    static count:number=0
    static getCount():number{
        return Peeps.count
    }
    public id:number;
    constructor(public name:string){
        this.name=name;
        this.id=++Peeps.count
    }
}

const AAA =new Peeps("AAA")
console.log(Peeps.count);
const BBB =new Peeps("BBB")
console.log(Peeps.count);
const CCC =new Peeps("CCC")
console.log(Peeps.count);
const DDD =new Peeps("DDD")
console.log(Peeps.count);
console.log(AAA.name);

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)
MyBands.data = ['Van Halen', 5150] // must be string data