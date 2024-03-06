// // Users should be able to:

// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Open a lightbox gallery by clicking on the large product image
// - Switch the large product image by clicking on the small thumbnail images
// - Add items to the cart
// - View the cart and remove items from it


//user can add and reduce the quantity of the item
let minus = document.getElementById("minus-button");
let plus = document.getElementById("plus-button");
let numberOfProduct = document.getElementById("quantity");
let counter =0;

//Button for decreasing the quantity
minus.addEventListener("click", function(){
    if(counter >0){
        counter--;
        displayQuantity();
        calculateTotal();
    }
    else{
        alert("The item is at its lowest unit!");
    }
})
//Button for increasing the quantity
plus.addEventListener("click", function(){
    counter++;
    displayQuantity();
    calculateTotal();
})
//Display the total
function displayQuantity(){
    numberOfProduct.innerText = counter;
}

//Calculate the total price and display the total of the price
const discountedPrice = 125;
let sum = 0;
let total = document.getElementById("totalAmount");
function calculateTotal(){
    sum = discountedPrice * counter;
    total.innerText = `Total: $${sum}  `;
}

//Store the all the information of the product purchased by customer into the local storage and then display it in another webpage
let storeButton =  document.getElementById("addCartButton");

let item = document.getElementById("purchasedItem");

let counterCart = 0;
let nameOfItem = document.getElementById("itemName");
let descriptionOfItem = document.getElementById("itemDescription");

let storeItem = JSON.parse(localStorage.getItem("itemAddedToTheCart")) || 0;
//Make sure that the item is being updated even though the website is refreshed
if(storeItem){
    retrieveData();
    item.classList.add("jumping");
}
else{
    item.innerText = 0;
    item.classList.remove("jumping");
}
storeButton.addEventListener("click", function(){
    let newArray = [];
    let storageArray = JSON.parse(localStorage.getItem("item"))|| [];
    let nameOfItem = document.getElementById("itemName");
    let descriptionOfItem = document.getElementById("itemDescription");
    if(counter > 0 ){
        newArray.push(mainImage.innerHTML, nameOfItem.innerText, descriptionOfItem.innerText,counter, 125);

        storageArray.push(newArray);

        localStorage.setItem("item", JSON.stringify(storageArray));
        // //Remove the class first so that it can be trigger whenever it is click (not yet solve the problem)
       
        // Add one more function which will show notification beside the cart icon
        if(storeItem ==0){
                counterCart++;
                storeItem = counterCart;
                localStorage.setItem("itemAddedToTheCart", JSON.stringify(storeItem));
                item.classList.add("jumping");
                retrieveData();
        }
        else{
            storeItem++;
            localStorage.setItem("itemAddedToTheCart", JSON.stringify(storeItem));
            retrieveData();
        }
        

        alert("The Item has been added to the cart.");        
   }
   else{
    alert("Please select the quantity of item");
    
   }
   //Once the submit button is clicked reset the quantity;
   counter = 0;
   sum =0;
   numberOfProduct.innerText = counter;
   total.innerText = `Total: $${sum}  `;
})

function retrieveData(){
    //Retrieve the data to show me the counterCart
let numberOfItemBought = JSON.parse(localStorage.getItem("itemAddedToTheCart"));
        
item.innerText = numberOfItemBought;
}















//Click the thumbnail and then the selected image will be poppep out
let mainImage = document.getElementById("main-image-location");
mainImage.innerHTML =  `<img class="main-image" id="main-image-1" src="images/image-product-1.jpg"/>`     
for(let i=0; i<4; i++){
    document.getElementById(`image-thumbnail-${i+1}`).addEventListener("click", function(){
        mainImage.innerHTML =  `<img class = "main-image" id="main-image-${i+1}" src="images/image-product-${i+1}.jpg" />`
    });
}


//Functionality of the light box
let lightBox = document.getElementById("light-box");
let content = document.getElementById("image-light-box");

content.innerHTML = `<img class="thumbnails-lightBox" id="image-thumbnail-lightBox-1" src="images/image-product-1.jpg"/>`;     

mainImage.addEventListener("click", function(){
    lightBox.classList.add("active");

    for(let i=0; i<4; i++){
        document.getElementById(`image-thumbnail-lightBox-${i+1}`).addEventListener("click", function(){
            content.innerHTML =  `<img  class="thumbnails-lightBox" id="image-thumbnail-lightBox-${i+1}" src="images/image-product-${i+1}.jpg" />`
        });
    }
})



//Exit the light box
let exit = document.getElementById("exitLightBoxButton");
exit.addEventListener("click", function(){
    lightBox.classList.remove("active");
})































































