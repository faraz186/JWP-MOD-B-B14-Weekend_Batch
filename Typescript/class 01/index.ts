console.log('typescript session start...')

let num: number | string | boolean = 10;

num = 100;

console.log(num);

let firstName: string = "Muhammad";

console.log(firstName);

let num1: number = 50;

let num2: number = 100;

console.log(num1 + num2);

let age: number = 24;

if (age >= 18) {
  console.log("allow");
} else {
  console.log("not allow");

}


function sum(a: number, b: number): void {
  console.log(a + b);
}

sum(500, 300);

let bool:any = false;

bool = "faraz"



// tuple


let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.push(500);

console.log(arr);



let arr: (number | string | boolean)[] = [
  "faraz",

  true,
  100,
  "hamza",
  20,
  "farooq",
  50,

  false,
  "ali",
  10,
  "ahmed",
];

console.log(arr);



function biodata(name: string, age: number | string, gender?: string): void {
  console.log(name, age, gender);
}

biodata("faraz", 25);



let arr: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.splice(1, 0, "faraz");

console.log(arr);



// object


// type object

type Student = {
  name: string;
  age: number;
  email: string;
  city: string;
  status?: boolean;
};

let obj: Student = {
  name: "faraz",
  age: 25,
  email: "faraz@gmail.com",
  city: "karachi",
};
