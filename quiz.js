function populatePage (inventory) {
	var outputRow = document.getElementById('productCardRow'),
			htmlString = '';

  // Loop over the inventory and populate the page
	for (var i = 0, j = inventory.length; i < j; i++) {
  	var inventoryTracker = inventory[i],
  			carMake = inventoryTracker.make,
  			carModel = inventoryTracker.model,
  			carColor = inventoryTracker.color,
  			carPrice = inventoryTracker.price,
  			carYear = inventoryTracker.year,
  			carDescription = inventoryTracker.description,
  			carPurchasedStatus = inventoryTracker.purchased;
         
        // convert sold-status from true/false to human readable form
        if (carPurchasedStatus === true) {
          carPurchasedStatus = 'Unavailable';
        } else {
          carPurchasedStatus = 'Available';
        };

        // creates a new row div, then one for every third card
        if ( i % 3 === 0 ) {
          htmlString += `<div class="row">`
        }
        // build product card
  			htmlString += `<div class="col-sm-3 carProductCard" id="carProducts${i}">
												<h4>${carMake}</h4>
												<h3>${carModel}</h3>
												<h5>$${carPrice}</h5>
												<h6>${carYear}</h6>
												<p id="carDescription${i}">${carDescription}</p>
												<p>${carPurchasedStatus}</p>
												<p>${carColor}</p>
											</div>`;
        // closes row div on every 6th card
        if ( i % 3 === 2 ) {
            htmlString +=`</div>`;
        }
  }
  // add products to DOM
  outputRow.innerHTML += htmlString;

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.resetStyles();
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

