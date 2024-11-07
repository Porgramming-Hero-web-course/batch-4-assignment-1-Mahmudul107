// Problem-2

const removeDuplicates = (numbers: number[]) : number[] =>
    numbers.filter((num, index) => numbers.indexOf(num) === index)

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);