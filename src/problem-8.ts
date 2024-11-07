{
  // Problem-8

  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  };

  // Sample Input
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  
  validateKeys(person, ["name", "age"]);
  validateKeys(person, ["name", "address"]);
}
