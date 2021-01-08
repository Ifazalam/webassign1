var allProductsFromStorage = JSON.parse(window.localStorage.getItem("product") || "[]");



var productView = allProductsFromStorage.map((item, index) => `
<div id="${index}" class="card">
<img src="images/01.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${item.productName}</h5>
  <h6 class="card-subtitle">ID : ${index}</h6>
  <h6 class="quantity${index}"> Quantity : ${item.productQuantity.length == 0 ? 0 : item.productQuantity }</h6>
  <p class="card-text">${item.productPrice} BDt</p>
  <button type="button" class="btn btn-outline-info add">Add</button>
</div>
</div>`)

console.log(productView)
document.getElementById("productCards").innerHTML = productView;


document.querySelector("#productCards").addEventListener("click",(e)=>{
    if(e.target.className.includes("add")){
        var index =  e.target.parentElement.parentElement.id;
        var quantityView = document.querySelector(`.quantity${index}`);
        var allProductsFromStorage = JSON.parse( window.localStorage.getItem("product") || "[]");
        
        if(allProductsFromStorage[index].productQuantity.length > 0 && +allProductsFromStorage[index].productQuantity > 0){
            allProductsFromStorage[index].productQuantity = (parseInt(allProductsFromStorage[index].productQuantity)-1).toString();
            allProductsFromStorage[index].addedToCart = (parseInt(allProductsFromStorage[index].addedToCart)+1).toString();
            quantityView.innerHTML = `Quantity : ${allProductsFromStorage[index].productQuantity}` 
            window.localStorage.setItem("product", JSON.stringify(allProductsFromStorage));
        }
        else{
            alert("item not available")
        }
    }
});
