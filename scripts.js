//Test med bruk av bilder

//MODEL

let items = ['apple', 'pear', 'banana', 'pineapple', 'mango']
let shoppingCart = [];

//VIEW

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Add fruit:</div>
    <img src="photos/apple.jpg" onclick="addItem(this, 0)">
    <img src="photos/pear.jpg" onclick="addItem(this, 1)">
    <img src="photos/banana.jpg" onclick="addItem(this, 2)">
    <img src="photos/pineapple.jpg" onclick="addItem(this, 3)">
    <img src="photos/mango.jpg" onclick="addItem(this, 4)">

    <div>Shopping cart:</div>
    `
}

//CONTROLLER

function addItem(imgElement, itemIndex){

}