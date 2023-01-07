console.log("hello world");

let appVariable = "an empty string";

class Person {
   constructor(name, age){
      this.name = name;
      this.age = age;
   }

   fWalke(){
      console.log(this.name+" is walking")
   }

   fDescription(){
      console.log("The person: "+ this.name + ". Has " + this.age + " years old")
   }
}

let person1 = new Person("Pedro", 32);

person1.fDescription();


//  i guess im understanding this shit