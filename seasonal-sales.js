var categoriesRequest = new XMLHttpRequest();
categoriesRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();

var categoriesData = JSON.parse(e.target.responseText);



var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
productsRequest.open("GET", "categories.json");
productsRequest.send();

var productsData = JSON.parse(e.target.responseText);
console.log(productsData);
