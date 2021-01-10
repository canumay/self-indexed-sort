import selfIndexedSort from "../self-indexed-sort";

test("Check sorting algorithm is working", () => {
  let unSortedArr: Array<number> = [3, 4, 1000, 7, 4];
  expect(selfIndexedSort(unSortedArr)).toEqual([3, 4, 4, 7, 1000]);
});

test("10.000 random array sorting (array size: 1000, element range: 1-10)", () => {
  for (let index = 0; index < 10000; index++) {
    let randomArr: Array<number> = [...new Array(1000)].map(() =>
      Math.floor(Math.random() * 10)
    );
    let sortedArr: Array<number> = randomArr.sort();
    expect(selfIndexedSort(randomArr)).toEqual(sortedArr);
  }
});

test("10.000 random array sorting (array size: 1000, element range: 1-100)", () => {
  for (let index = 0; index < 10000; index++) {
    let randomArr: Array<number> = [...new Array(1000)].map(() =>
      Math.floor(Math.random() * 100)
    );
    let sortedArr: Array<number> = randomArr.sort();
    expect(selfIndexedSort(randomArr)).toEqual(sortedArr);
  }
});

test("10.000 random array sorting (array size: 1000, element range: 1-1000)", () => {
  for (let index = 0; index < 10000; index++) {
    let randomArr: Array<number> = [...new Array(1000)].map(() =>
      Math.floor(Math.random() * 1000)
    );
    let sortedArr: Array<number> = randomArr.sort();
    expect(selfIndexedSort(randomArr)).toEqual(sortedArr);
  }
});