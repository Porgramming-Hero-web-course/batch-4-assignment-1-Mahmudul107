// Problem-1

function sumArray(numbers: number[]): number{
   let sum = 0;
   for (const num of numbers){
    sum = sum + num
   }
   return sum;
}

sumArray([1, 2, 3, 4, 5]);