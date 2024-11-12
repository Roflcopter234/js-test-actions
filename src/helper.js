"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matmul = matmul;
function matmul(a1, a2) {
    if (a1[0].length != a2.length) {
        throw new Error("a1.length != a2[0].length");
    }
    var res = [];
    for (var i = 0; i < a1.length; i++) {
        var temp = [];
        for (var j = 0; j < a2[0].length; j++) {
            temp.push(0);
        }
        res.push(temp);
    }
    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < a2[0].length; j++) {
            for (var k = 0; k < a2.length; k++) {
                res[i][j] += a1[i][k] * a2[k][j];
            }
        }
    }
    return res;
}
