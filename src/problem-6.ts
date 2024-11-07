// Problem-6

interface IProfile {
    name: string;
    age: number;
    email: String;
}

const updateProfile = (profile: IProfile, updates: Partial<IProfile>) => {
    return {...profile, ...updates}
}

// Sample Input:
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));