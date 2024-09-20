/*
 * Add two numbers. If b is not provided, assign b to 0.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b as a number
 */
export const addTwoNumbers = (a: number, b?: number): number => {
  if (typeof b === "undefined") {
    return a;
  } else {
    return a + b;
  }
};

// /**
//  * Calculates the total sum of an array of numbers.
//  * @param values - An array of numbers or strings.
//  * @returns The sum of the numbers.
//  */
export const sumArray = (numbers: (number | number)[]): number => {
  numbers.forEach((item, index) => {
    if (typeof item != "number") {
      numbers[index] = parseInt(item);
    } else {
      item;
    }
  });
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

// Create type "Person" with the following properties:
// - name: string
// - age: number

export type Person = {
  name: string;
  age: number;
};

// Create type "User" which extends "Person" and adds the following properties:
// - type: 'user' (literal type)

export type User = Person & {
  type: "user";
}

// Create type "Admin" which extends "Person" and adds the following properties:
// - isAdmin: boolean

export type Admin = Person & {
  isAdmin: boolean;
}

// Create a type "AllPeople" which is a union of "Person", "User", and "Admin"
export type AllPeople = Person | User | Admin;

// Add function "isAdmin" that returns true if "u" is an admin

export const isAdmin = (u: AllPeople) => {
  if("isAdmin" in u){
    return u.isAdmin;
  }
  return false;
  }

// Add function "isUser" that returns true if "u" is a user

export const isUser = (u: AllPeople) => {
  if('type' in u){
    return true;
  }
  return false;
}

/**
 * If a "Admin" calls userGreetingMessage, return "Hello, {name}. You are an admin."
 * If a "User" calls userGreetingMessage, return "Hello, {name}. You are a user."
 * If a "Person" calls userGreetingMessage, return "Hello, {name}. You do not have access."
 * @param user - The user to greet
 * @returns A greeting message
 */

export const userGreetingMessage = (u: AllPeople) =>{
  if("isAdmin" in u){
    return 'Hello, ' + u.name + '. You are an admin';
  } else if('type' in u){
    return 'Hello, ' + u.name + '. You are a user.';
  } else
    return 'Hello, ' + u.name + '. You do not have access.'
}
