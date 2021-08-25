//to create class restaurant
//with declared variables holding data reg. dishes and prices
//declared constructor with parameter names  and references to current instance of the class
//to write a function that prints lunch+dinner+dessert+total price to the console


class Restaurant{
    menuBreakfast: string;
    menuLunch: string;
    menuDinner: string;
    menuDessert: string;
    foodPrice: number;

    constructor (breakfast: string, lunch: string, dinner: string, dessert: string, price: number){
        this.menuBreakfast = breakfast;
        this.menuLunch = lunch;
        this.menuDinner = dinner;
        this.menuDessert = dessert; 
        this.foodPrice = price;       
    }

    getOrderTotal() {

        return "The client ordered ${this.menuLunch}, ${this.menuDinner} and ${this.menuDessert} and paid 65 pounds.";
        

    }

}


// let order = new Restaurant("eggs", "toast", "burger", "pie", 65);

// order.displayPrice();






//____________________________________

//earlier:

//1:
// class Restaurant {
//     menuBreakfast: string;
//     menuLunch: string;
//     menuDinner: string;
//     menuDessert: string;
//     foodPrice: number;

//     constructor (breakfast: string, lunch: string, dinner: string, dessert: string, price: number){
//         this.menuBreakfast = breakfast;
//         this.menuLunch = lunch;
//         this.menuDinner = dinner;
//         this.menuDessert = dessert;        
//         this.foodPrice = price;
//     }

//     getOrderTotal(number = 65) {
//         console.log("For ${this.menuLunch}, ${this.menuDinner} and ${this.menuDessert} the client will pay ${foodPrice} pounds");


//     }

// }


//2:
// class Restaurant {
//     menuBreakfast: string;
//     menuLunch: string;
//     menuDinner: string;
//     menuDessert: string;

//     constructor (breakfast: string, lunch: string, dinner: string, dessert: string){
//         this.menuBreakfast = breakfast;
//         this.menuLunch = lunch;
//         this.menuDinner = dinner;
//         this.menuDessert = dessert;        
//     }

//     getOrderTotal(foodPrice: number = 65 {
//         console.log("For ${this.menuLunch}, ${this.menuDinner} and ${this.menuDessert} the client will pay ${foodPrice} pounds");


//     }

// }
