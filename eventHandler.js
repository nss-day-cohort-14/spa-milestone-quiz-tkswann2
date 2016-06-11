var CarLot = (function (oldCarLot) {
// grab all necessary DOM elements for event listeners
  var descriptionInput = document.getElementById('descriptionInput'),
      submitButton = document.getElementById('descriptionSubmit'),
      productCards = document.getElementsByClassName('carProductCard');

// function to encapsulate the adding of event listeners to all DOM elements
  oldCarLot.activateEvents = function () {
  	// event listener for keydown press in text input box for adding description
  	// to car product cards
    	descriptionInput.addEventListener('keyup', function (event) {
    		for (var i = 0, j = productCards.length; i < j; i++) {
    			let editDescription = productCards[i];
    			// check for the 'active' (clicked) card
    			if (editDescription.classList.contains('active')) {
    				descriptionOutput = editDescription.querySelector(`#carDescription${i}`);
    				// insert input value to selected card description
    				descriptionOutput.innerText = descriptionInput.value;
    			}
    		}
    	});
    // loop over dynamically created product cards and add event listeners
    	for (var i = 0, j = productCards.length; i < j; i++) {
    		let productCard = productCards[i],
    				color = 'rgba(60, 230, 214, .5)';

    		productCard.addEventListener('click', function (clickEvent) {
    			// pass click event to callback function
    			CarLot.addStyles(clickEvent, color);
    		});
			}

  };
 return oldCarLot;
})(CarLot || {});

