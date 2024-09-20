//MODEL
let products = ['apple', 'pear', 'banana', 'pineapple', 'mango'];
let shoppingCart = [];
let shoppingCartIndex = [];


//VIEW
updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Click on an item to add it to your cart:</div>
    <button onclick="addItem(this, 0)">Apple</button>
    <button onclick="addItem(this, 1)">Pear</button>
    <button onclick="addItem(this, 2)">Banana</button>
    <button onclick="addItem(this, 3)">Pineapple</button>
    <button onclick="addItem(this, 4)">Mango</button>
    <div>Shopping cart:
    <div class="shoppingCart">${addToShoppingCart()}</div>
    </div> 
    `
}

function addToShoppingCart(){
    let html = ``;
    for(let i = 0; i < shoppingCart.length; i++){
        let product = products[shoppingCartIndex[i]]
        html += /*HTML*/`<div>${shoppingCart[i]}</div>
        <div>${product}</div>`
    }
    return html;
}


//CONTROLLER

function addItem(productName, indexOfProduct){
    shoppingCart.push(productName)
    shoppingCartIndex.push(indexOfProduct)
    updateView();
}