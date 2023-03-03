"use strict";
//decorators
//decorator is function there are 4 types of it /dec works with classes
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Compo(config) {
    return function (Constructor) {
    };
}
let Comp = class Comp {
    get componentName() {
        return this.name;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
    }
};
Comp = __decorate([
    Compo({
        selector: `#card`,
        template: `
     <div class="card">
       <div class="card-content">
         <span class="card-title">Card Component</span>
       </div>
     </div>
  `
    })
], Comp);
//# sourceMappingURL=9-decorators.js.map