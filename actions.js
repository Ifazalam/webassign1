document.getElementById("submit-product-button").addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e);
    var productName = document.getElementById("product-name").value;
    var productDescription = document.getElementById("product-description").value;
    var productUrl = document.getElementById("product-photo-url").value;
    var productQuantity = document.getElementById("product-quantity").value;
    var productPrice = document.getElementById("product-price").value;
    var addedToCart = 0 ;
    var allProductsFromStorage = JSON.parse( window.localStorage.getItem("product") || "[]");
    const product = {
        productName,
        productDescription,
        productUrl,
        productQuantity,
        productPrice,
        addedToCart
    }

    allProductsFromStorage.push(product);
    
    console.log("list", allProductsFromStorage);
    window.localStorage.setItem("product", JSON.stringify(allProductsFromStorage));
    
});