function showTheCategories(e) {
   var categoriesData = JSON.parse(e.target.responseText);
   console.log("category data:", categoriesData);
   // document.getElementById("categories").innerHTML = categoriesData;
}

function showTheProducts(k) {
   var productsData = JSON.parse(k.target.responseText);
   console.log("product data:", productsData);
   var currentProduct;
   var currentCategory;
   var currentPrice;
   for (var i = 0; i < productsData.products.length; i++) {
      // currentProduct += productsData.products[i].name;
      // currentCategory += productsData.products[i].category_id;
      // currentPrice += productsData.products[i].price;
      document.getElementById("products").innerHTML += `
         <h3>Product: ${productsData.products[i].name}</3>
         <p>Department: ${productsData.products[i].category_id}<p>
         <p>Price: ${productsData.products[i].price}</p>
         <hr>
         `
   }

   // console.log(productsData.products[5].name);
}


var categoriesRequest = new XMLHttpRequest();
categoriesRequest.addEventListener("load", showTheCategories);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();



var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", showTheProducts);
productsRequest.open("GET", "products.json");
productsRequest.send();
