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

  			htmlString += `<div class="col-sm-3 carProductCard" id="carProducts${i}">
												<h4>${carMake}</h4>
												<h3>${carModel}</h3>
												<h5>$${carPrice}</h5>
												<h6>${carYear}</h6>
												<p id="carDescription${i}">${carDescription}</p>
												<p>${carPurchasedStatus}</p>
												<p id="carColor${i}">${carColor}</p>
											</div>`;
  }

  outputRow.innerHTML += htmlString;

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.resetStyles();
  CarLot.activateEvents();
  CarLot.addStyles();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

CarLot.activateEvents(function (clickEvent) {
          // on click focus on text input for car description
          descriptionInput.focus();
          // loop to reset border width to default
          for (var x = 0, y = productCards.length; x < y; x++) {
            let removeBorderCards = productCards[x];
            // remove border from cards
                removeBorderCards.classList.remove('borderWidth');
                removeBorderCards.classList.remove('active');
          }
          let clickedCard = clickEvent.currentTarget;
          // add border width class on click
              clickedCard.classList.add('borderWidth');
              clickedCard.classList.add('active');
        });

