//MODEL
    let products = ['apple', 'pear', 'banana', 'pineapple', 'mango'];
    let shoppingCart = [];


//VIEW
    updateView()

    function updateView(){
        document.getElementById('app').innerHTML = /*HTML*/`
        <div>Click on an item to add it to your cart:</div>
        <button onclick="addItem(products[0])">Apple</button>
        <button onclick="addItem(products[1])">Pear</button>
        <button onclick="addItem(products[2])">Banana</button>
        <button onclick="addItem(products[3])">Pineapple</button>
        <button onclick="addItem(products[4])">Mango</button>
        <div>Shopping cart:
        <div class="shoppingCart">${shoppingCart}</div>
        </div> 
        `
    }


//CONTROLLER

function addItem(indexOfProduct){
    shoppingCart.push(indexOfProduct)
    
    updateView()
}


// function addItem(){
//     for (let i = 0; i < products.length; i++) {
//         if (products = i[0]){
//             addedItems += products;
//         }

//     }
// }

