function Animal(name,species) 
{
  this.name = name;
  this.species = species;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} says hello!`)
}


let tom = new Animal("tom", "tiger");
let bloop = new Animal("bloop", "panda");
let roost = new Animal("roost", "chicken");
