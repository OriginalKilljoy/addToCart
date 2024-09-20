//MODEL
let products = ['apple', 'pear', 'banana', 'pineapple', 'mango', 'egg', 'starfruit'];
let shoppingCart = [];



//VIEW
updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Click on an item to add it to your cart:</div>
    ${makeButtons()}
    <div>Shopping cart:
    <div class="shoppingCart">${makeList()}</div>
    </div> 
    `
}


//CONTROLLER


//Denne henter direkte informasjonen fra arrayet med produkter og legger det inn i arrayet til shoppingcart via knappetrykk.
function addItem(indexOfProduct){
shoppingCart.push(indexOfProduct)

updateView()
}

//Denne løkken gjør slik at vi kan oppdatere arrayet med produkter, og det fortsettes å lage knapper automatisk når vi gjør det.
function makeButtons(){
    let buttons = '';
    for(let i = 0; i < products.length; i++){
        buttons += `<button onclick="addItem(products[${i}])">${products[i]}</button>`
    }
    return buttons;
}

//Vi lager først en variabel for all frukten vi kommer til å putte i handlekurven
//Inni løkken lager vi en variabel for det som blir stringen.
//Deretter en variabel for å få stor bokstav på denne stringen
//Deretter en variabel for å få med resten av stringen
//Substring kopierer det vi allerede har, og lager en kopi fra og med i 1 - dermed stor forbokstav + resten smått
function makeList(){
    let fruit = '';
    for(let i = 0; i < shoppingCart.length; i++){
        let string = shoppingCart[i];
        let frontLetter = string.charAt(0).toUpperCase();
        let restLetters = string.substring(1);
        fruit += `<li>${frontLetter}${restLetters}</li>`
        
    }
    return fruit;
}
