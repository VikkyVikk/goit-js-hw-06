const elemUl = document.querySelector("ul#categories");

const countNumberOfCategories = elemUl.children.length;
console.log(`Number of categories ${countNumberOfCategories} :`);



const elemLi = elemUl.children;

for (let i = 0; i < elemLi.length; i += 1) {
    const numberOfLi = elemLi[i].children;

    const textContent = numberOfLi[0].textContent;
    console.log("Category: ", textContent);
    const countNumberOfLi = numberOfLi[1].children.length;
    console.log("Elements: ", countNumberOfLi);
}