let list = ["apple", "banana", "orange"];
const fruitsList = document.querySelector(".fruits-list");
const input = document.querySelector("input");


function displayFruits(list) {
    fruitsList.innerHTML = "";
    if (list.length===0) {
        const none = document.createElement("li");
        none.classList.add("none");
        none.textContent = "No results found!"; 
        fruitsList.append(none);
        return none;
    } else { 
        for (let i = 0; i < list.length; i++) { 
           const fruitX = document.createElement("li");
           fruitX.textContent = list[i];
           fruitX.classList.add("fruitX");
           fruitsList.append(fruitX);
        }
    }
} 

displayFruits(["apple", "banana", "orange"]);


input.oninput = function () {
    const result = list.filter(function (word) {
        return word.startsWith(input.value)
    });
    displayFruits(result);
}



