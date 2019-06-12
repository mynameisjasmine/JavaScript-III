/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When this is used alone, this refers to the Global object. In a browser the Global object 
is [object Window]

* 2. Implicit Binding: The object that is to the left of the dot (of the this keyword) is what the this keyword will be 
bound to.

* 3. New Binding: Creates an empty object that references the prototype (including properties and method) of another object. 
The this keyword now refers to the newly created object.

* 4. 
*
* write out a code example of each explanation above
*/



// Principle 1

// code example for Window Binding
let happy = this;
console.log(happy);



// Principle 2

// code example for Implicit Binding
anObject = {
    name: 'Jonny',
    age: 22,
    hometown: 'Antarctica'
  
};
console.log(anObject.name);




// Principle 3

// code example for New Binding

sentence = function(intro) {
    this.name = 'Johnny';
    this.intro = intro
    this.say = function() {
      console.log(`${this.intro} my name is ${this.name}`);
      console.log(this);
    };
    }
  const johnny = new sentence('Howdy,');
    johnny.say()

}






// Principle 4

// code example for Explicit Binding