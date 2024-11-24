// Object methods

// 1) Keys()

let obj = {
  name: "faraz",
  age: 24,
  city: "karachi",
  email: "faraz@gmail.com",
};

for (let keys in obj) {
  console.log(keys, obj[keys]);
}

console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.freeze(obj));

console.log(Object.entries(obj));

// Short Circuit

// &&  AND Operator

// || OR Operator

let name = null;

let check = name || "Allow";

console.log(check);
// --------------------------------------------------

let a = 2;

let b = 3;

let exp1 = false || (true && a + b);

let exp2 = (10 - true + "hello" + (5 - 0) && false) || "values";

let exp3 = 40 - "hello" + 2 * 5 || null || "Faraz" + 10 * 2;

console.log(exp3);

// Default parameters

function sum(a = 5, b = 10) {
  console.log(a + b);
}

sum(20, 30);

// rest Operator

function sum(a, b, ...rest) {
  let store = 0;

  for (let i = 0; i < rest.length; i++) {
    store += rest[i];
  }

  console.log(a + b + store);
}

sum(100, 200, 131, 131, 31, 31, 351, 351, 515, 1, 2032, 3201);

// spread Operator

let arr1 = ["abc", 12];

let arr2 = ["xyz", 15];

let arr3 = [...arr1, ...arr2];

let arr3 = arr1.concat(arr2);

console.log(arr3);

let obj1 = {
  studentId: 1,
  studentName: "abc",
};

let obj2 = {
  studentId: 186,
  studentName: "faraz",
};

let obj3 = { ...obj1, ...obj2 };

console.log(obj3);

// Destructing of Array

let arr = ["abc", 50, true, { id: 1, status: false }, [100, 50, 200, 500]];

let [name, num, status, obj, arr1] = arr;

let [num1, num2, num3, num4] = arr1;

console.log(num1, num2, num3, num4);

let arr = [
  {
    id: 1,
    name: "faraz",
    status: true,
  },
  {
    id: 2,
    name: "ali",
    status: true,
  },
  {
    id: 3,
    name: "ahmed",
    status: false,
  },
  {
    id: 4,
    name: "farooq",
    status: true,
  },
  {
    id: 5,
    name: "zain",
    status: true,
  },
];

let [obj1, obj2, obj3, obj4, obj5] = arr;

console.log(obj1.name, obj2.name, obj3.name, obj4.name, obj5.name);

// Destructing of Object

let { id, name, status, education } = {
  id: 5,
  name: "zain",
  status: true,
  education: {
    CGPA: 4,
    semester: "5th",
    year: 2024,
  },
};

let { CGPA, semester, year } = education;

console.log(CGPA, semester, year);
