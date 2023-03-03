"use strict";
//combinening  particular elementnts into one
class MyForm {
    constructor(email) {
        this.email = email;
        this.type = "inline";
        this.state = "active";
        this.email = email;
    }
    getInfo() {
        return {
            type: this.type,
            state: this.state
        };
    }
}
const form = new MyForm(`email.com`);
console.log(form.email);
console.log(form.getInfo);
//# sourceMappingURL=namespaces.js.map