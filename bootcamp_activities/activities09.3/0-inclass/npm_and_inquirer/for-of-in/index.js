//const pets = ["cats", "dogs", "snakes", "birds", "pandas", "spiders"];

const pets = "SNAKESBIRDSPANDAS";
for (const pet of pets) {
    console.log(pet);
}

const kitchen = {
    blender: true,
    spoon: "Nice Spoons",
    toaster: "3 Slot",
    extra: ["microwave", "cheese grater", "second toaster"]
}

for (const kitchenItem in kitchen) {

    console.log(kitchenItem + ":" + kitchen[kitchenItem])
}
