
function strip(x:string | number){
    if(typeof x==="number"){
        return x.toFixed(2)
    }
    return x.trim()
}


class MyRes{
    header=`Header Res`
    result=`Result Res`
}

class MyError{
    header=`Header ERROR`
    message=`Message ERROR`
}

function handle(res:MyRes|MyError){

    if(res instanceof MyRes){return {info:res.header + res.result}}
    else{
        {info:res.header + res.message}
    }
}   

type AlertType = `success` | `danger` | `warning`

function setAlertType(type:AlertType){

}

setAlertType("success")