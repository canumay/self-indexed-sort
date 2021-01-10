import selfIndexedSort from './self-indexed-sort';

const exampleArr1: Array<number> = [4,1,7,9,11,17,23];
const exampleArr2: Array<number> = [9,12,65,32,-5,6,9,4,3];

console.log("Test Case 1:");
console.log("Array 1 before sorting:", exampleArr1.toString());
console.log("Array 1 after sorting:", selfIndexedSort(exampleArr1).toString());
console.log("------------------------------");
console.log("Test Case 2:");
console.log("Array 2 before sorting:", exampleArr2.toString());
console.log("Array 2 after sorting:", selfIndexedSort(exampleArr2).toString());