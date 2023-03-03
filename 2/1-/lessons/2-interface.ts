interface Rect {
    readonly id:string
    color?:string
    size:{
        width:number,
        height:number,
    }
}

const react1: Rect={
    id: "1",
    size: {
        width: 10,
        height: 20
    }
}

const react2: Rect={
    id: "1",
    size: {
        width: 10,
        height: 20
    },
   
}
react2.color="blue"
// react2.id="123"

const react3 ={} as Rect
const react4=<Rect>{}

interface RectWithArea extends Rect{
    getArea:()=>number
}

const react5:RectWithArea ={
    getArea: function (): number {
       return this.size.width*this.size.height
    },
    id: "234",
    size: {
        width: 20,
        height: 30
    },
    color:"yellow"
}

interface IClock{
    time:Date,
    setTime(date:Date):void
}

class Clock implements IClock {
    time!: Date 
    setTime(date: Date): void {
       this.time=date
    }

}

// interface IStyles{
//    border:string,
//  .......
// }
interface IStyles{
    [key:string]:string | number
}

const css:IStyles={
    border:"1px solid black",
    color:'red',
    padding:"5px",
    margin:"5px"
}