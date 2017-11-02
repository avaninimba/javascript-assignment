/* GLOBAL VARIABLES */
var listOfProducts;
var numberOfAddedProducts = 0;
// add more global variables when needed..
/* Get products from the json file and store it in a javascript variable */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();   
});
/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    /* Check your console to see that the products are stored in the listOfProducts varible */
    var main = document.getElementById("main")
    
    for(var i = 0; i < listOfProducts.length; i++) {
        var ulElement = document.createElement("ul")
        var liElement = document.createElement("li")
        var h2Element = document.createElement("h2")
        var imgProductsElement = document.getElementById("imgProducts")
    
        h2Element.innerText = listOfProducts[i].title;
        main.appendChild (h2Element)

        ulElement.innerText = listOfProducts[i].description;
        main.appendChild (ulElement)

        imgProductsElement.src = "assets/" + listOfProducts[i].image;
        main.appendChild (imgProductsElement)
        console.log(imgProductsElement)

        liElement.innerText = listOfProducts[i].price + "kr";
        main.appendChild (liElement)
        
        var buttonElement = document.createElement("button")
        buttonElement.innerText = "Lägg till i varukorgen"
        buttonElement.onclick = function() {
        numberOfAddedProducts += 1
        console.log(numberOfAddedProducts)
        
        }
    
        main.appendChild (buttonElement)
    }

    
    /*  ulElement.appendChild(liElement)
   liElement.appendChild(h2Element)
   liElement.appendChild(buttonElement)*/    
    
    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */
    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */
}
/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */