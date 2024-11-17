// advance JS

// diff b/w =====> var let & const

// var

var firstName = "faraz";

{
  var firstName = "Muhammad";
  console.log(firstName);
}

console.log(firstName);


// let

let firstName = "faraz";

{
  let firstName = "Muhammad";
  console.log(firstName);
}

console.log(firstName);

// const

const firstName = "faraz";

{
  const firstName = "Muhammad";
  console.log(firstName);
}

console.log(firstName);


function num() {
  const nums = 10;
  console.log(nums);
}

num();

const num = 50;

num = 100;

console.log(num);

const obj = {
  name: "faraz",
  email: "faraz@gmail.com",
  city: "karachi",
};

obj = "Muhammad faraz";

console.log(obj);

const firstName = "Muhammad";

const firstName = "faraz";

console.log(firstName);

console.log(firstName);

const firstName = "faraz";

// var nm = 20;

// greet();

func();   // output: func is not a function

console.log(func);  //output: undefined

var func = function () {
  console.log("welcome user!!");
};


// function decalration

function abc(){

}
