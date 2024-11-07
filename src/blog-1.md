# Union and Intersection Types in TypeScript

TypeScript enhances JavaScript by adding type safety. Two important type constructs, **union** and **intersection** types, provide flexibility and precision when handling data.

## Table of Contents

- [Union Types](#union-types)
- [Intersection Types](#intersection-types)
- [Use Cases](#use-cases)
- [Summary](#summary)

## Union Types

Union types allow variables to hold multiple types, giving flexibility while maintaining type safety.

### Syntax

```typescript
type MyType = string | number;

Example: 

function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

printId(123); // Valid
printId("abc"); // Valid
```

Union types work well when a value might be of different types, such as handling API responses or user input.

Intersection Types
Intersection types combine multiple types into one. A value of an intersection type must meet all the combined type requirements.

Syntax

```type MyType = A & B;```


Example
```typescript
Copy code
type Person = { name: string };
type Worker = { jobTitle: string };
type Employee = Person & Worker;

const employee: Employee = {
  name: "Mahmudul Islam",
  jobTitle: "Developer"
};

Intersection types are useful for creating composite types, such as combining properties of Person and Worker into Employee.

Use Cases

Union Types: For variables or parameters that can accept multiple types, e.g., string | number.
Intersection Types: For types requiring properties from multiple sources, e.g., Person & Worker.

Summary

Union Types (|) allow values to be one of several types.
Intersection Types (&) combine multiple types into a single type, ensuring it meets all type requirements.
These types provide the flexibility needed to handle complex data structures while maintaining TypeScript's type safety.