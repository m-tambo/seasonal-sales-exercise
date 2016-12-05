



var categoriesRequest = new XMLHttpRequest();
categoriesRequest.addEventListener("load", showTheCategories);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();

function showTheCategories(e) {
   var categoriesData = JSON.parse(e.target.responseText);
   console.log(categoriesData);
}


var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", showTheProducts);
productsRequest.open("GET", "products.json");
productsRequest.send();

function showTheProducts(k) {
   var productsData = JSON.parse(k.target.responseText);
   console.log(productsData);
}
