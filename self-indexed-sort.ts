const selfIndexSort = (arr: Array<number>): Array<number> => {
  let maxNum: number = arr[0];
  let minNum: number = arr[0];

  arr.forEach((el) => {
    if (el > maxNum) maxNum = el;
    if (el < minNum) minNum = el;
  });
  console.log("min element of array:", minNum);
  console.log("max element of array:", maxNum);

  const SSCOUNT: number = maxNum - minNum + 1;

  console.log("Space count:", SSCOUNT);

  let sortSpace: Array<number> = new Array(SSCOUNT).fill(0);

  console.log("Sort space before indexing:", sortSpace);

  arr.forEach((el) => { 
    sortSpace[el - minNum]++; 
  });

  console.log("Sort space after indexing:", sortSpace);

  let i: number = 0;
  for (let index = 0; index < SSCOUNT; index++) {
    while (sortSpace[index] > 0) {
      arr[i++] = index + minNum;
      sortSpace[index]--; 
    }
  }
  return arr;
};

const unSortedArr: Array<number> = [3, 4, 1000, 7, 4];
console.log("Array before self indexed sort", unSortedArr);
console.log("Array after self indexed sort", selfIndexSort(unSortedArr));
