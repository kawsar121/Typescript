    // Type Alias
    // Type Alias er shubida holo var var type decler na kore, akber type decler kore bar bar reuse kora, 

type Student = {
    name : string;
    class : string;
    roll : number;
    age : number
}

// Alias use in Object
const student1 : Student = {
    name : "kawsar",
    class : 'seven',
    roll : 34,
    age : 13
}

// Alis in Function
type Add = (num1:number, num2:number) => number

const add : Add = (num1, num2) => {
    return num1+num2
}

