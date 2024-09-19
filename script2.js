//MODEL
    let products = ['apple', 'pear', 'banana', 'pineapple', 'mango'];
    let shoppingCart = [];
    let addedItems = [];


//VIEW
    updateView()

    function updateView(){
        document.getElementById('app').innerHTML = /*HTML*/`
        <div>Click on an item to add it to your cart:</div>
        <button onclick="addItem()">Apple</button>
        <button onclick="addItem()">Pear</button>
        <button onclick="addItem()">Banana</button>
        <button onclick="addItem()">Pineapple</button>
        <button onclick="addItem()">Mango</button>
        <div>Shopping cart:${addedItems}
        </div> 
        `
    }


//CONTROLLER

function addItem(){
    for (let i = 0; i < products.length; i++) {
        if (products = i[0]){
            addedItems += products;
        }

    }
}

