interface UUUSer{
    name:string
}
interface Humann extends UUUSer{
   speak():void
}

interface Animall extends UUUSer{
    voice():void;
    color:string
    type:string
 }

 const serverInfo:UUUSer={
    name:"XXXX",
    speak:()=>{console.log("ssdsd")}
    
 }

 function isHuman (serverInfo:UUUSer):serverInfo is Humann{
    return typeof (serverInfo as Humann).speak==="function"
 }

if(isHuman(serverInfo)){
    serverInfo.speak()
}