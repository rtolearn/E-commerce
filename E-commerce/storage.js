// Create a list for user to confirm if they wanna buy the item
let cartContent = document.getElementById("content-cart");








let dataArray = [];

//Read the data from the local storage
function readData(){
    
    dataArray = JSON.parse(localStorage.getItem("item"));
    if(dataArray.length === 0){
        cartContent.innerText = "";
    }
    else{
        for(let i=0; i<dataArray.length; i++){
   
            cartContent.innerHTML += `
                <li> 
    
                    <div id="item">
                        <!-- Image of the item -->
                        <div id="image-cart">
                            ${dataArray[i][0]}  
                        </div>
                        <!-- information of the item -->
                        <div id="item-info-cart">
    
                            <h1>  ${dataArray[i][1]}  </h1>
                            <p>   ${dataArray[i][2]}  </p>
                            <div id="price-cart">
                                <h3>Quantity:   ${dataArray[i][3]}</h3>
                                <h3>Unit Price: $${dataArray[i][4]}  </h3>
                                <h2>Total:  $${dataArray[i][3] * dataArray[i][4]}  </h2>
                            </div>
    
                            <!-- Button to pruchase of buy -->
                            <div id="buttonFinalDecision">
                                <button>Purchase</button>
                                <button class="delete-button" id="button${i + 1}">Delete</button>
                            </div>
                        </div>
                    </div>
                
            
                </li>
            ` 
        }
    }

}
//Call the function
readData();

//Once the delete button is clicked

let deleteButton = document.querySelectorAll(".delete-button");

deleteButton.forEach((button,index) => {
    button.addEventListener("click", function(){
        
         // Get the unique identifier of the item to delete (e.g., index)
         const itemIndex = index;

         // Remove the item from dataArray based on the identifier
         dataArray.splice(itemIndex, 1);
        
        localStorage.setItem("item", JSON.stringify(dataArray));
        cartContent.innerText = "";
        //Call the function to display the content
        readData();
        //Reload the page once the button is clicked because the item can only be deleted once the webpage is deleted
        location.reload(true);

        //Delete the number of items which are added to the cart
        let deleteItemInTheCart = JSON.parse(localStorage.getItem("itemAddedToTheCart"));
        deleteItemInTheCart--;
        localStorage.setItem("itemAddedToTheCart", JSON.stringify(deleteItemInTheCart));
 
    })
})






