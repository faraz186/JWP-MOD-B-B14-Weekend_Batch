// function constructor


function Student(name, age, city) {
  this.stdName = name;
  this.stdAge = age;
  this.stdCity = city;
  this.getName = function () {
    return this.stdName;
  };
}


const std10 = new Student("faraz", 24, "karachi");
const std20 = new Student("hamza", 22, "lahore");

console.log(std10.getName());
console.log(std20.getName());



// class constructor

class Student {
  constructor(name, age, city) {
    this.stdName = name;
    this.stdAge = age;
    this.stdCity = city;
  }

  getName = () => {
    return this.stdName;
  };
}

const std1 = new Student("farooq", 21, "karachi");

console.log(std1.getName());

class Student {
  constructor(name, age, city) {
    this.stdName = name;
    this.stdAge = age;
    this.stdCity = city;
  }
}

class School extends Student {
  constructor(instName, instId, name, age, city) {
    super();
    this.stdName = name;
    this.stdAge = age;
    this.stdCity = city;
    this.schoolName = instName;
    this.schoolId = instId;
  }
}

const schol = new School("JWP", 135, "faraz", 24, "lahore");

console.log(schol);


// commonjs es5


// es6 , modulejs


// import,  export


const greet = () => {  
  return "Muhammad Faraz";
};

const stdObj = () => {
  return {
    name: "faraz",
    age: 24,
    city: "karachi",
    email: "faraz@gmail.com",
    status: false,
  };
};

export { greet, stdObj };



// News App

const cardDiv = document.getElementById("cardSection");
const input = document.getElementById("inputField");

let search = () => {
  const API_KEY = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=d0ab0d9c70444ce0a82b32ff8ef54bbe`;
  fetch(API_KEY)
    .then((res) => res.json())
    .then((data) => {
      data.articles.map((e, i) => {
        console.log(e);
        cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
            <img src=${e.urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">${e.description}/p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
