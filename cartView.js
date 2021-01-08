var allProductsFromStorage = JSON.parse(window.localStorage.getItem("product") || "[]");




var productView = [];


for(var index=0 ; index <allProductsFromStorage.length;  index++){
    var item = allProductsFromStorage[index];
    if(item.addedToCart.length > 0 && +item.addedToCart > 0){
        productView.push(`<div id="${index}" class="card">
        <img src="images/01.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.productName}</h5>
          <h6 class="card-subtitle">ID : ${index}</h6>
          <h6 class="addedQuantity${index}"> Added Quantity : ${item.addedToCart}</h6>
          <p class="card-text">${item.productPrice} BDt</p>
          <button type="button" class="btn btn-outline-info remove">Remove</button>
        </div>
        </div>`);
    }
}

console.log(productView);

document.getElementById("cartCards").innerHTML = productView;


document.querySelector("#cartCards").addEventListener("click",(e)=>{
    if(e.target.className.includes("remove")){
        var index =  e.target.parentElement.parentElement.id;
        var parent = e.target.parentElement.parentElement;
        var quantityView = document.querySelector(`.addedQuantity${index}`);
        var allProductsFromStorage = JSON.parse( window.localStorage.getItem("product") || "[]");
        
        if(allProductsFromStorage[index].addedToCart.length > 0 && +allProductsFromStorage[index].addedToCart > 0 ){
            allProductsFromStorage[index].productQuantity = (parseInt(allProductsFromStorage[index].productQuantity)+1).toString();
            allProductsFromStorage[index].addedToCart = (parseInt(allProductsFromStorage[index].addedToCart)-1).toString();
            quantityView.innerHTML = `Added Quantity : ${allProductsFromStorage[index].addedToCart}` 
            window.localStorage.setItem("product", JSON.stringify(allProductsFromStorage));
            if(+allProductsFromStorage[index].addedToCart == 0 ) parent.remove();
        }
        else{
            alert("item not available")
        }
    }
});
