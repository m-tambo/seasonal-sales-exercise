var categoriesData;
var productsData;

function loadCategories(e) {
   categoriesData = JSON.parse(e.target.responseText);
   console.log("category data:", categoriesData);
}



function loadProducts(k) {
   productsData = JSON.parse(k.target.responseText);
   console.log("product data:", productsData);
   var currentProduct;
   var currentCategory;
   var currentPrice;
   var category;

   for (var i = 0; i < productsData.products.length; i++) {
      if (productsData.products[i].category_id === 1) {
         category = "Apparel";
      } else if (productsData.products[i].category_id === 2) {
         category = "Furniture";
      } else if (productsData.products[i].category_id === 3) {
         category = "Household";
      }
      document.getElementById("products").innerHTML += `
         <h3 id="prodSpecs">Product: ${productsData.products[i].name}</3>
         <p id="deptSpecs">Department: ${category}<p>
         <p id="priceSpecs">Price: ${productsData.products[i].price}</p>
         <hr>
         `
   }
}

var categoriesRequest = new XMLHttpRequest();
categoriesRequest.addEventListener("load", loadCategories);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();

var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", loadProducts);
productsRequest.open("GET", "products.json");
productsRequest.send();
