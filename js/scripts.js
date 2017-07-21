// Business Logic -->
function Pizza(size, topping) {
  this.size = size;
  // this.topping = new Topping();
}

// function Topping(name) {
//   this.name = name;
//   this.price = 1;
// }





// UI Logic -->
$(function(){
  $("#select-options").submit(function(event){
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();

    var newPizza = new Pizza(size)

    $("#output").text(size);


  })
})
