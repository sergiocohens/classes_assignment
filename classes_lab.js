// ## Question 1
//
// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
class Person {
  constructor(firstName, lastName, middleName) {
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
  }
  fullName() {
    console.log(this.firstName, this.middleName, this.lastName)
  }
}

let sergio = new Person('Sergio', 'Cohen-Salama', 'Mauricio')
let carmen = new Person('Carmen', 'Cohen-Ellsworth', 'Lucile')

console.log(carmen.firstName)

// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
sergio.fullName()
carmen.fullName()

// ## Question 2
//
// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
class Book {
  constructor(title, author, rating) {
    this.title = title
    this.author = author
    this.rating = rating
  }
  isGood () {
    if (this.rating >= 7) {
      return true
    } else {
      return false
    }
  }
}

let onTheRoad = new Book('On the Road', 'Jack Kerouac', 9)
let junky = new Book('Junky', 'William Burroughs', 8)
let howl = new Book('Howl', 'Allen Ginsberg', 10)

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
console.log(onTheRoad.isGood())

// ## Question 3
//
// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
class Dog {
  constructor(name, breed, mood, hungry) {
    this.name = name
    this.breed = breed
    this.mood = mood
    this.hungry = hungry
  }
// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
  playFetch() {
    this.hungry = true
    this.mood = 'playful'
    console.log('Ruff!!')
  }
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
  feed() {
    if (this.hungry === false) {
      console.log("The dog doesn't look hungry")
    } else {
      this.hungry = false
      console.log('Woof!')
    }
  }
// d. Add a method called `toString` that returns a description of the dog.
  toString() {
    let hunger
    if (this.hungry === true) {
      hunger = 'is hungry right now'
    } else {
      hunger = 'is not hungry right now'
    }
    console.log(`${this.name} is a ${this.breed}. It's feeling ${this.mood} and ${hunger}.`)
  }
}

let some = new Dog('Sam', 'cocker', 'happy', true)
some.toString()
some.feed()
some.toString()
some.feed()
some.playFetch()
some.toString()

// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273
}
// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
class Celsius {
  constructor(tempInCelsius) {
    this.celsius = tempInCelsius
  }
  getFahrenheitTemp() {
    return 1.8 * (this.celsius) + 32
  }
  getKelvinTemp() {
    return 273 + (this.celsius)
  }
// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
  isBelowFreezing() {
    if (temperature.celsius < 0) {
      return true
    } else {
      return false
    }
  }
}

let temperature = new Celsius(-2)
console.log(temperature.celsius)
console.log(temperature.getFahrenheitTemp())
console.log(temperature.getKelvinTemp())
console.log(temperature.isBelowFreezing())

// ## Question 5
//
// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
class Movie {
  constructor(name, year, genre, cast, description) {
    this.name = name
    this.year = year
    this.genre = genre
    this.cast = cast
    this.description = description
  }
  blurb() {
    console.log(`${this.name} is a ${this.genre} movie released in ${this.year}, featuring ${this.cast}. ${this.description}`)
  }
}

let aSpaceOdyssey = new Movie ('2001: A Space Odyssey', 1968, 'sci-fi', 'Keir Dullea, Gary Lokwood and Douglas Rain', 'A mind-blowing journey through space and time with the outstanding direction of Stanley Kubrick based on a short story by Arthur C. Clarke.' )

// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
aSpaceOdyssey.blurb()

// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(vector) {
    let newVector = {}
    newVector.x = this.x + vector.x
    newVector.y = this.y + vector.y
    return newVector
  }
  minus(vector) {
    let newVector = {}
    newVector.x = this.x - vector.x
    newVector.y = this.y - vector.y
    return newVector
  }
  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

let vector1 = new Vector(3,4)
let vector2 = new Vector(1,2)
console.log(vector1.plus(vector2))
console.log(vector1.minus(vector2))
console.log(vector1.getLength())

// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
  }
  static numberOfWheels() {
    return 4
  }
}

let volvo = new Car('Volvo', '960')

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
class Bike {
  constructor(gears, bell) {
    this.gears = gears
    this.hasBell = bell
  }
  static numberOfWheels() {
    return 2
  }
}

let boardwalk = new Bike (1, false)

// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?
// Makes sense because that's going to be the answer in all cases for either bikes or cars.

// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
class Vehicle {
  constructor(color, name) {
    this.color = color
    this.name = name
  }
  makeSound() {
    console.log('WHOOSSSH')
  }
}

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
class moddedCar extends Vehicle {
  constructor(color, name, make, model) {
    super (color, name)
    this.make = make
    this.model = model
  }
  static numberOfWheels() {
    return 4
  }
}

class moddedBike extends Vehicle {
  constructor(color, name, gears, bell) {
    super (color, name)
    this.gears = gears
    this.hasBell = bell
  }
  static numberOfWheels() {
    return 2
  }
}

// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
let thisBike = new moddedBike('green', 'Bikey McBikeface', 5, true)
console.log(thisBike)

// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
let thisCar = new moddedBike('red', 'Carry McCarface', 'Toyoya', 'Yaris')
console.log(thisCar)
