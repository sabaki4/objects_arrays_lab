/**
 * In these tasks you will need to manipulate the object below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

dog = {
  name: "Poppy",
  age: 4,
  breed: "Springer Spaniel",
  colours: ["white", "brown"],
};

cat = {
  name: "Morris",
  age: 9,
  breed: "European Shorthair",
  colours: ["black", "white"],
};

tortoise = {
  name: "Ella",
  age: 7,
  breed: "Eastern Hermanns",
  colours: ["yellow", "brown", "black"],
  favouriteFood: "Dandelion",
};

/**
 * Q1. What's the name of the dog?
 */

dogName = "Poppy";
console.log("The dog's name is " + dogName);

/**
 * Q2. What breed is the cat?
 */

catBreed = "European Shorthair";
console.log("The cat is a " + catBreed);

/**
 * Q3. It's the tortoise's birthday! Add one to her current age.
 */


const age = 7;
tortoiseAge = age + 1;
console.log(tortoiseAge);
/**
 * Q4. How many different colours is Poppy?
 */

dogColourCount = 2;
console.log("The dog has " + dogColourCount + " different colours");

/**
 * Q5. I've just bought a 12-year-old African Grey parrot called Lucky. Create an object for her.
 */

parrot = {
  name: "Lucky",
  age: 12,
  breed: "African",
  colours: ["Grey"],
};
console.log(parrot);

/**
 * Q6. Ella's favourite food is dandelion, add this information to her object
 */

console.log(tortoise);

/**
 * Q7. What's the combined age of all the pets?
 */

dogAge = 4;
catAge = 9;
totalPetAge = dogAge + catAge + tortoiseAge;
console.log("The total age of the pets is " + totalPetAge);

/**
 * Q8. It turns out that Morris isn't a European Shorthair. We don't actually know his real breed, so remove that key from his object
 */

delete cat.breed;
console.log(cat);