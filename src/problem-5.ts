// Problem-5

const getProperty = <T, K extends keyof T> (obj: T, key: K): T[K] => {
    return obj[key]
}

// Sample Input
const person = { name: "Alice", age: 30 };

getProperty(person, "name") 
getProperty(person, "age")