let sayHello = (firstName: string, lastName: string): string => {
    return `Hello ${firstName} ${lastName}! Welcome to TypeScript.`;
};

let firstName: string = "Mehrad";
let lastName: string = "Bayat";
console.log(sayHello(firstName, lastName));
