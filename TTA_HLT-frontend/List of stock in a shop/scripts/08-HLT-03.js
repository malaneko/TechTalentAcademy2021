// Work on this task will be continued! 


// to create a list of stock at a shop
// create a query what a client wants - prompt choice
// client answer 
// if in stock -> "[item] is currently i stock"
// if not in stock -> "[item] is not in stock"

//query "Do you want to order the item?"
// if yes -> [] added to new stock list -> new list created & visible in the browser console
//if no -> end of program






//________________________________________________________________________


// fnal approach:

let shop_stock = ["bread", "potatoes", "chicken", "juice", "cheese", "rice", "pasta", "ham", "cookies"];


let your_item = prompt("What are you looking for?");

  

function ifInStock(){
    for(var i = 0; i < shop_stock.length; i++){

        if(your_item === shop_stock[i]){
            document.write("Ok, " + your_item + " is currently in stock");
            break
        }
    }

    if(your_item != shop_stock[i]){
               
        var ifOrder = prompt("Sorry, " + your_item + " is not in stock. Do you want to order the item?");      //message as variable that can be used (for condition) further on
     
    }

    if(ifOrder == "yes"){
        alert("With pleaure!"); 
        
        
        const newShop_stock = [shop_stock, shop_stock.push(your_item)];          // the new item is added and visible in the array in the browser console 
  
            console.log(newShop_stock);
            
    } else {
        alert("Thank you and sorry.")                                            // nothing added to the array 
    
        
        
    }
}

ifInStock();
  






//________________________________________________________________________

//earlier attempts:



// let shop_stock = ["bread", "potatoes", "chicken", "juice", "cheese", "rice", "pasta", "ham", "cookies"];


// let your_item = prompt("What are you looking for?");

  
// // console.log(shop_stock.length)

// function ifInStock(){
//     for(var i = 0; i < shop_stock.length; i++){
//         if(your_item === shop_stock[i]){
//             document.write("Ok, " + your_item + " is currently in stock");
//             break
//         }
//     }
//     if(your_item != shop_stock[i]){

//         document.write("Sorry, " + your_item + " is not in stock.");      // I wondered how to receive responses from the client - that is why I made 2nd approach

//     }

// } 

// ifInStock();


// const newShop_stock = [shop_stock, shop_stock.push(your_item)];          // the new item is added and visible in the array in the browser console - but in the 2nd approach I link it with the answer 'yes'
  
//   console.log(newShop_stock);




//     *       *        *




// let shop_stock = ["bread", "potatoes", "chicken", "juice", "cheese", "rice", "pasta", "ham", "cookies"];


// let your_item = prompt("What are you looking for?");
  

// function ifInStock(){
//     for(let i = 0; i < shop_stock.length; i++){
//         if(your_item === shop_stock.length){
//             document.write(your_item + " is currently in stock");
//         }else if(your_item !== shop_stock.length){
//             document.write(your_item + " is not in stock")  

//     } 
// }

// ifInStock();





//     *       *        *






// while (true){
//     let your_item = prompt("What are you looking for?");
    

    

//     for(let i = 0; i< shop_stock.length; i++){
//         if(your_item == shop_stock[i]){
//             document.write(shop_stock[i] + " is currently in stock");
//         }else if(your_item != shop_stock[i]){
//             document.write(" is not in stock");    
//         }
    
  
    
//     } break;





//     *       *        *





// var ifOrder = prompt("Do you want to order the item?");


        // document.write(prompt("Sorry, " + your_item + " is not in stock. Do you want to order the item?"))


// if("no"){
//     document.write("Thank you and sorry."); 

// }if("yes"){
//     document.write("With pleaure!"); 



//     }
// }

// (clientResponse === "yes"){
//     document.write("oki");




// let query = prompt("Do you want to order the item?");

// function ifNotInStock(){
    
