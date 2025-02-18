const categoriesEL = document.querySelector("#categories");
const categoriesArray = document.querySelectorAll("li.item");
console.log("Number of categories: ", categoriesArray.length);

categoriesArray.forEach(item => {
    const categNameEl = item.querySelector("h2");
    console.log("Category: ", categNameEl.textContent);
    const subListElArr = item.querySelectorAll("li");
    console.log("Elements: ", subListElArr.length);

});