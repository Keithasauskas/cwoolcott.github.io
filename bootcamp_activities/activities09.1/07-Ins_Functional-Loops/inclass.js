const menu = [
    { item: "coffee", calories: 10 },
    { item: "fries", calories: 400 },
    { item: "cheeseburger", caloriesw: 700 }
];

//   map:
// menuItems = menu.map((menuItem) => {return menuItem.item});
// console.log(menuItems)

// RETURNS A NEW ARRAY OF JUST ITEMS
menuItems = menu.map((menuItem) => { return menuItem.item });
console.log(menuItems);

menuItems = [];
for (let i = 0; i < menu.length; i++) {
    menuItems.push(menu[i].item)
}

//console.log(menuItems);

// RETURNS A NEW ARRAY OF JUST CALORIES
menuCalories = menu.map((element, i) => { return element.calories });
//console.log(menuCalories);


// forEach:
// menu.forEach(function(menu) {
//   console.log("The " + menu.item + " has " + menu.calories + "calories");
// });

for (let i = 0; i < menu.length; i++) {
    console.log("The " + menu[i].item + " has " + menu[i].calories + " calories");
}

menu.forEach((menuItem, i) => {
    console.log(i + ": The " + menuItem.item + " has " + menuItem.calories + "calories");
});

// RETURNS A NEW ARRAY 
//filter:
// const soda = ["Pepsi", "Coke"];

// const betterSoda = soda.filter((eachSoda) => {
//   return eachSoda.startsWith("P");
// });

const someFood = menu.filter((eachMenuItem) => {
    return eachMenuItem.item.startsWith("c");
});

const lowCal = menu.filter((eachMenuItem) => {
    return eachMenuItem.calories < 500;
});

console.log(lowCal);