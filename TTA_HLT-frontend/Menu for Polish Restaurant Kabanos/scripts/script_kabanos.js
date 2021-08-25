
//items list
const menu = [
    {
        id: 1,
        title: "Coffee",
        category: "drinks",
        price: "2.5£",
        img: "img/coffee.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 2,
        title: "Tea",
        category: "drinks",
        price: "1.8£",
        img: "img/tea.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

    },
    {
        id: 3,
        title: "Juice",
        category: "drinks",
        price: "2.5£",
        img: "img/juice.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

    },

    {
        id: 4,
        title: "Scrambled eggs",
        category: "breakfast",
        price: "4.5£",
        img: "img/eggs.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

    },
    {
        id: 5,
        title: "Sandwiches",
        category: "breakfast",
        price: "3.5£",
        img: "img/sandwitch.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 6,
        title: "Bagels",
        category: "breakfast",
        price: "4.0£",
        img: "img/bagel.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 7,
        title: "Kabanos sausage snacks",
        category: "breakfast",
        price: "1.0£",
        img: "img/kabanosy.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },

    {
        id: 8,
        title: "Pierogi with fruits",
        category: "lunch",
        price: "4.8£",
        img: "img/pierogiwithfruits.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 9,
        title: "Pierogi with meat",
        category: "lunch",
        price: "5.2£",
        img: "img/pierogiwithmeat.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 10,
        title: "Potato placki",
        category: "lunch",
        price: "4.5£",
        img: "img/potatoplacki.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },

    {
        id: 11,
        title: "Żurek",
        category: "dinner",
        price: "7.0£",
        img: "img/zurek.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 12,
        title: "Bigos",
        category: "dinner",
        price: "9.5£",
        img: "img/bigos.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 13,
        title: "Beef roulade",
        category: "dinner",
        price: "10.0£",
        img: "img/beefrolada.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },

    {
        id: 14,
        title: "Pączki",
        category: "dessert",
        price: "1.8£",
        img: "img/paczki.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        id: 15,
        title: "Poppy seed cake",
        category: "dessert",
        price: "3.5£",
        img: "img/poppyseedcake.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },

]


const menuLayout = document.querySelector(".menu_layout");



//_________________________________________________

//call-back function & map method - iterating over items & returning them
window.addEventListener('DOMContentLoaded', function(){
    // console.log('test');
    displayMenu(menu);




    
});



//_________________________________________________

//function to diplay all the menu items - moved from window.addEventListener('DOMContentLoaded', etc according to PDF
function displayMenu(menuItems){
    let displayItems = menuItems.map(function(item){
        return `<div class="product_example">     

                <div>                 
                    <h2 class="product_name">${item.title}</h2>
                </div>

                    <img src=${item.img} alt=${item.title} class="image"> 

                        <div class="product_about">                                      
                            <h3 class="product_price">${item.price}</h3>  
                        </div>

                        <p class="product_description">
                        ${item.description}
                        </p> 

                </div>`;



    });

    displayItems = displayItems.join("");
    console.log(displayItems)
    menuLayout.innerHTML = displayItems;

}







//_________________________________________________

//using buttons (navigation)


const buttons = document.querySelectorAll(".button_navigation");

buttons.forEach(function(b){
    b.addEventListener('click', function (e){
        console.log(e.currentTarget.dataset.id)
    })
})



//logic

buttons.forEach(function (btn){
    btn.addEventListener('click', function (e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItems){
            //console.log(menuItems.category);
            if (menuItems.category === category){
                return menuItems;
            }

        });
        //console.log(menuCategory);
        if (category === 'all'){
            displayMenu(menu);

        }
        else{
            displayMenu(menuCategory);
        }


    });
});