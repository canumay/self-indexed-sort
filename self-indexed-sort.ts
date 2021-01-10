const selfIndexSort = (arr: Array<number>): Array<number> => {
  let maxNum: number = arr[0];
  let minNum: number = arr[0];

  arr.forEach((el) => {
    if (el > maxNum) maxNum = el;
    if (el < minNum) minNum = el;
  });

  const SSCOUNT: number = maxNum - minNum + 1;

  let sortSpace: Array<number> = new Array(SSCOUNT).fill(0);

  arr.forEach((el) => {
    sortSpace[el - minNum]++;
  });

  let i: number = 0;
  for (let index = 0; index < SSCOUNT; index++) {
    while (sortSpace[index] > 0) {
      arr[i++] = index + minNum;
      sortSpace[index]--;
    }
  }
  return arr;
};

export default selfIndexSort;
