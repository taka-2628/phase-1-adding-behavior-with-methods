class Cat {
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        return `${this.name} says meow!`
    }
}

/*
let pochi = new Cat("pochi", "male")
console.log(pochi)
// => Cat { name: 'pochi', sex: 'male' }
console.log(pochi.sex)
// => male
pochi.sex = "female"
console.log(pochi.sex)
// => female
*/

class Dog{
    constructor(name, sex){
        this.name = name
        this.sex = sex 
    }
    speak(){
        return this.name + " says woof!"
    }
}

class Bird{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        if (this.sex == "male"){
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}

/*
let piyo = new Bird("Piyo", "male")
console.log(piyo)
// => Bird { name: 'Piyo', sex: 'female' }
console.log(piyo.speak())
// => It's me! piyo, the parrot!
*/