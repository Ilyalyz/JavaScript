class Animal {
    speak() {
        console.log("Тварина шось каже");
    }
}

class Dog extends Animal {
    speak() {
       console.log("Собака каже: ГАВ");
    }
}

let myDog = new Dog();
myDog.speak();