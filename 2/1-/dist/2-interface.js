"use strict";
const react1 = {
    id: "1",
    size: {
        width: 10,
        height: 20
    }
};
const react2 = {
    id: "1",
    size: {
        width: 10,
        height: 20
    },
};
react2.color = "blue";
// react2.id="123"
const react3 = {};
const react4 = {};
const react5 = {
    getArea: function () {
        return this.size.width * this.size.height;
    },
    id: "234",
    size: {
        width: 20,
        height: 30
    },
    color: "yellow"
};
class Clock {
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: "1px solid black",
    color: 'red',
    padding: "5px",
    margin: "5px"
};
//# sourceMappingURL=2-interface.js.map