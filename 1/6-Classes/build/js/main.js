"use strict";
class Coder {
    constructor(name, music, age, lng = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lng = lng;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lng = lng;
    }
    getAge() {
        return `Hello ${this.age}`;
    }
    getLng() {
        return `LNG ${this.lng}`;
    }
}
const Dave = new Coder("dave", "classic", 55);
console.log(Dave.getAge());
console.log(Dave.getLng());
console.log(Dave.age);
console.log(Dave.lng);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
}
class Guitarist2 {
    constructor(name, instrument, song) {
        this.name = name;
        this.instrument = instrument;
        this.song = song;
    }
    play(action) {
        return `Guitarist ${this.name} ${action}is playing ${this.song} with ${this.instrument}`;
    }
}
const Page = new Guitarist2("Jo", "piano", "Spring ");
console.log(Page.play("Hello"));
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
Peeps.count = 0;
const AAA = new Peeps("AAA");
console.log(Peeps.count);
const BBB = new Peeps("BBB");
console.log(Peeps.count);
const CCC = new Peeps("CCC");
console.log(Peeps.count);
const DDD = new Peeps("DDD");
console.log(Peeps.count);
console.log(AAA.name);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen', 5150]; // must be string data
