// Global Variable
var toppingArray = [];
var uniqueArray;

// Business Logic -->
function Pizza(size) {
  this.size = size;
  this.topping = uniqueArray.length;
}

Pizza.prototype.price = function() {
  if (this.size === "Medium") {
    return 5 + uniqueArray.length;
  }

  if (this.size === "Large") {
    return 10 + uniqueArray.length;
  }

  if (this.size === "X-Large") {
    return 15 + uniqueArray.length;
  }
}


// UI Logic -->
$(function() {

  $("#select-options").submit(function(event) {

    event.preventDefault();

    $("#output").show();
    $("#show").show();

    var inputtedSize = $("input:radio[name=size]:checked").val();

    $(".size-pizza").text(inputtedSize);

    $("input:checkbox[name=topping]:checked").each(function() {
      toppingName = $(this).val();
      toppingArray.push(toppingName)
      uniqueArray = toppingArray.filter(function(item, pos) {
        return toppingArray.indexOf(item) == pos;
      })
      var uniqueString = uniqueArray.join(", ")
      $(".toppings").text(uniqueString);

    });

    var newPizza = new Pizza(inputtedSize, toppingName);
    $(".price").text(newPizza.price());
  });

});
