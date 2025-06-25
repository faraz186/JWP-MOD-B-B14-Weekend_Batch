// type casting
 
// let number:number = 100;

// number = 500;

// console.log(number);



// let arr:(number | string | boolean)[] = [1,2,3,4,5,6,7,8,9,10];

// arr.push(false)

// console.log(arr);

// function getNum(a:number,b:number):void
// {
//     console.log(a + b);
  
// }

// getNum(10,20)

// type

// interface Student  {
//     name:string,
//     email:string,
//     age?:number,
//     gender:string,
//     status:boolean,
//     courses:string[]
// }

// interface ClassDetails extends Student{
//     className:string,
//     classSection:string,
   
// }

// let obj:ClassDetails = {
//     className:'WAM',
//     classSection:"secA",
//     name:"faraz",
//     email:"faraz@gmail.com",
//     status:true,
//     gender:"male",
//     courses:["html","css"]
// }


// enum


// enum Shirt{
//     small,
//     medium,
//     large,
//     xLarge,
//     xxLarge
// }

// enum Colors{
//     red = "1",
//     green= "2" ,
//     blue = 5,
//     purple = "4",
//     orange = "5"
// }

// enum Status{
//     isSuccess  = 1,
//     isError = 0,
//     isLoading = "loading"
// }

// console.log(Status.isSuccess);



// function Student(){
//     this.name = name,
//     this.age = age,
//     this.gender = gender,
//     this.status = status,

// }

// let student1 = new Student()



// classes

class School{
    schoolName:string = "jwp";
}



class Student extends School{
    Firstname:string;
    Lastname:string;
    status:boolean

    constructor(Firstname,Lastname,status){
        super()
        this.Firstname = Firstname,
        this.Lastname = Lastname,
        this.status = status
    }
};

let student1 = new Student("faraz",'Muhammad',true)
