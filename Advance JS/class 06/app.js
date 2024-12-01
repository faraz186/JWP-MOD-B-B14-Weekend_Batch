console.log("start One");

setTimeout(() => {  
  console.log("start Two");  
}, 2000);
  
console.log("start Three");  


// Sync or Async

// promise


// there are 3 stages in promise.  
  

// 1) pending
// 2) fulfilled / resolve
// 3) reject


let pro = new Promise((resolve, reject) => {  
  let iceCream = true;
  if (iceCream === true) {  
    resolve("promise resolve");  
  } else {
    reject("promise reject");
  }
});

console.log(pro);

pro.then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


// Multiplication Table Task


let tableInput = +prompt("Enter a number to generate table");
let tableRange = +prompt("Enter range");

let defaultNum = 5;


let pro = new Promise((res, rej) => {
  if (tableInput) {
    res(tableInput);
  } else {
    rej(defaultNum);
  }
});



pro.then((data) => {
    for (var i = 1; i <= tableRange; i++) {
      document.write(`${data} x ${i} = ${data * i} <br>`);
    }
  })
  .catch((err) => {
    for (var i = 1; i <= 10; i++) {
      document.write(`${err} x ${i} = ${err * i} <br>`);  
    }
  });

// API

let fetchData = new Promise((res, rej) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res(data);
    })
    .catch((err) => {
      rej(err);  
    });
});
  
fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// async await

let fetchData1 = async () => {
  try {
    let getData = await fetch("https://jsonplaceholder.typicode.com/posts");

    let response = await getData.json();

    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData1();
