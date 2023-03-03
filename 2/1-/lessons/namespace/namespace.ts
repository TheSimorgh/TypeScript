namespace Utils {
  export function log(text: string, color: string): void;
  export function log(text: string, color: string, fontSize: number): void;

  export function log(text: string, color: string, fontSize?: number) {
    console.log(`SS`);
    if (fontSize) {
      console.log(`%c${text},color: ${color} font-size:${fontSize}px`);
    } else {
      console.log(`%c${text},color: ${color} `);
    }
  }
  log(`Text inside Utilis`, "#fffff", 40);
}

Utils.log(`Text inside Utilis`, "#fffff");

namespace Animals {
  export abstract class Animal {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract say(): void;
  }
}

namespace Animals {
  export class Tiger extends Animals.Animal {
    private text: string;
    constructor(name: string, text: string) {
      super(name);
      this.text = text;
    }

    say(): void {
     Utils.log(`Hello :${this.name}`,`#fffff`,60)
    }
  }

  export namespace Pets{
   export class Cat extends Animal{
        say(): void {
            Utils.log(`Hello :${this.name}`,`#fffff`,60)
        }
        
    }

    export  class Dog extends Animal{
        say(): void {
            Utils.log(`Hello :${this.name}`,`#fffff`,60)
        }
        
    }
  }
}


const tiger = new Animals.Tiger("XXXX","qqq")
tiger.say()

const catt = new Animals.Pets.Cat("XXSS")
catt.say()