var CarLot = (function (oldCarLot) {
  // initialize empty array to hold car JSON data
  var inventory = [];
// open a new XHR to grab car data and add to array
// add a callback variable for modular functionality
    oldCarLot.loadInventory = function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory);
      });

      inventoryLoader.open('GET', 'inventory.json');
      inventoryLoader.send();
    };
// define getter function for retrieving car data cross-modules
    oldCarLot.getInventory = function () {
      return inventory;
    };
  
  return oldCarLot;
})(CarLot || {});

