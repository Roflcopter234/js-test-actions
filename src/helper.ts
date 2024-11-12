export function matmul(a1: number[][], a2: number[][]): number[][] {
    if (a1[0].length != a2.length) {
        throw new Error("a1.length != a2[0].length");
    }

    let res: number[][] = [];
    for (let i=0; i < a1.length; i++) {
        let temp: number[] = [];
        for (let j=0; j < a2[0].length; j++) {
            temp.push(0);
        }
        res.push(temp)
    }
    for (let i=0; i < a1.length; i++) {
        for (let j=0; j < a2[0].length; j++) {
            for (let k=0; k < a2.length; k++) {
                res[i][j] += a1[i][k] * a2[k][j];
            }
        }
    }

    return res;
}