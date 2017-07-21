// Global Variable
var toppingArray = [];

// Business Logic -->
function Pizza(size) {
  this.size = size;
  this.topping = toppingArray.length;
}


Pizza.prototype.price = function() {
  if (this.size === "Small") {
    return 5 + this.topping;
  }

  if (this.size === "Medium") {
    return 10 + this.topping;
  }

  if (this.size === "Large") {
    return 15 + this.topping;
  }
}






// UI Logic -->
$(function() {

  $("#select-options").submit(function(event) {

    event.preventDefault();

    $("#output").show();

    var inputtedSize = $("input:radio[name=size]:checked").val();

    $(".size-pizza").text(inputtedSize);

    $("input:checkbox[name=topping]:checked").each(function() {
      toppingName = $(this).val();
      toppingArray.push(toppingName)
      var uniqueArray = toppingArray.filter(function(item, pos) {
          return toppingArray.indexOf(item) == pos;
      })
      $(".toppings").text(uniqueArray);

    });

    var newPizza = new Pizza(inputtedSize, toppingName);
    $(".price").text(newPizza.price());
  });


});
