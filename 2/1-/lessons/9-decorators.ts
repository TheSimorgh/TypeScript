//decorators
//decorator is function there are 4 types of it /dec works with classes

// function Log(constructor: Function) {
//   console.log(constructor)
// }

// function Log2(target: any, propName: string | Symbol) {
//   console.log(target)
//   console.log(propName)
// }

// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log(target)
//   console.log(propName)
//   console.log(descriptor)
// }
// @Log
// class Comp{
//     @Log2
//     name:string

//     @Log3 get componentName(){
//         return this.name
//     }
//     constructor(name:string){
//         this.name=name
//     }
// }

////////////////////////////////////////////
interface CompoDecorator{
    selector:string
    template:string
}
function Compo (config:CompoDecorator){
    return function (Constructor:Function){

    }
}
@Compo({
    selector:`#card`,
    template: `
     <div class="card">
       <div class="card-content">
         <span class="card-title">Card Component</span>
       </div>
     </div>
  `
})
class Comp{


   get componentName(){
        return this.name
    }
    constructor(public name:string){
        this.name=name
    }
}