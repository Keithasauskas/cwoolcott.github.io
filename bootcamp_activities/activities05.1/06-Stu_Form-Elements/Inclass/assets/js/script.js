var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();
    var shoppingItem = $("input[name='shopping-input']").val();
    //var shoppingItem = $("#shopping-input").val()

    if (!shoppingItem) {
        alert("Must Enter An Item!");
        return;
    }

    var listItem = $("<li>");
    listItem.addClass("shoppingItem");
    listItem.text(shoppingItem);

    shoppingListEl.prepend(listItem);

    $("input[name='shopping-input']").val("");

}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleFormSubmit)

// NO WORK
// $(".shoppingItem").on("click", function (e) {
//     alert($(this).text());
// })

//WORK
$("#shopping-list").on('click', '.shoppingItem', function () {
    alert("You Clicked " + $(this).text());
});

