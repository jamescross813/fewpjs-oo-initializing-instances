// Write your code here

class Breakfast{
    constructor(food, drink){
        this.food = food,
        this.drink = drink
    }
}

let one = new Breakfast('eggs')

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad,
        this.soup = soup,
        this.drink = drink
    }
}

let two = new Lunch("side salad")

class Dinner{
    constructor(salad, soup, entree, dessert){
        this.salad = salad,
        this.soup = soup,
        this.entree = entree,
        this._dessert = dessert
    }
}

let three = new Dinner("balsamic salad", "", "", "cheesecake")