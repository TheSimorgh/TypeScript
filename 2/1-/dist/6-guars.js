"use strict";
function strip(x) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyRes {
    constructor() {
        this.header = `Header Res`;
        this.result = `Result Res`;
    }
}
class MyError {
    constructor() {
        this.header = `Header ERROR`;
        this.message = `Message ERROR`;
    }
}
function handle(res) {
    if (res instanceof MyRes) {
        return { info: res.header + res.result };
    }
    else {
        {
            info: res.header + res.message;
        }
    }
}
function setAlertType(type) {
}
setAlertType("success");
//# sourceMappingURL=6-guars.js.map