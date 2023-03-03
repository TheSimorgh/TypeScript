"use strict";
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `${name}: Typescript version is ${this.version}`;
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
    constructor(model) {
        this.model = model;
        this.numberOfWheels = 4;
        this.model = model;
    }
}
class Animal {
    constructor() {
        //thre are 3 types of modficaors of class prote pub=default=if no any modife private
        this.voice = "";
        this.color = "black";
        this.body = "organic";
    }
    go() {
        console.log(`go`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    setVoice(voice) { this.voice = voice; }
    getVoice() { this.voice; }
    getInfo() { `${this.name} ${this.voice} ${this.color}`; }
}
const cat = new Cat(`bars`);
cat.setVoice("meow");
cat.getInfo();
class Component {
}
class AppComponent extends Component {
    info() {
        return "this is info";
    }
    render() {
        console.log("Hello");
    }
}
const x = new AppComponent;
x.info();
x.render();
//# sourceMappingURL=5-classes.js.map