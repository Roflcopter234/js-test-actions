import { matmul } from "../src/helper";

describe("Math functions", () => {
    let a1 = [[1, 2],
    [3, 4],
    [5, 6]];

    let a2 = [[1, 3, 5, 7],
    [2, 4, 6, 8]];

    let res = [[5, 11, 17, 23],
    [11, 25, 39, 53],
    [17, 39, 61, 83]];

    it("MatMul Test 1", () => {
      expect(matmul(a1, a2)).toEqual(res);
    });


    a1 = [[1, 2],
    [3, 4]];

    a2 = [[5, 6],
    [7, 8]];

    res = [[19, 22],
    [43, 50]];

    it("MatMul Test 2", () => {
        expect(matmul(a1, a2)).toEqual(res);
      });
  });