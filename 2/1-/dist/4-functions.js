"use strict";
function add(a, b) { return a + b; }
function toUppercase(a) { return a.trim().toUpperCase(); }
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log(`empty`, position());
// console.log(`one Param`, position(42));
console.log(`two Param`, position(10, 20));
//# sourceMappingURL=4-functions.js.map