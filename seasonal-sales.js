var categoriesData;
var productsData;

// import the categories JSON
function loadCategories(e) {
   categoriesData = JSON.parse(e.target.responseText);
   console.log("category data:", categoriesData);
   // event listeners for the select tag
   document.querySelector("select").addEventListener("change", discountPrice)
   // document.querySelector("#autumnDisc").addEventListener("change", discountPrice(categoriesData.categories[1].id, .25))
   // document.querySelector("#winterDisc").addEventListener("change", discountPrice(categoriesData.categories[0].id, .10))
}

// populate products into html
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
   // XML requests
   var categoriesRequest = new XMLHttpRequest();
   categoriesRequest.addEventListener("load", loadCategories);
   categoriesRequest.open("GET", "categories.json");
   categoriesRequest.send();
}

// discounted price function
function discountPrice(e) {
   console.log(e)
   for (var k = 0; k < categoriesData.categories.length; k++) {
      for (var i = 0; i < productsData.products.length; i++) {
         if (productsData.products[i].category_id === categoriesData.categories[k].id) {
            document.getElementById("priceSpecs").innerHTML = `${productsData.products[i].price - (productsData.products[i].price * categoriesData.categories[k].discount)}`
         }
      }
   }
}

// XML requests
var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", loadProducts);
productsRequest.open("GET", "products.json");
productsRequest.send();
