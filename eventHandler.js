var CarLot = (function (oldCarLot) {
// grab all necessary DOM elements for event listeners
  var descriptionInput = document.getElementById('descriptionInput'),
      submitButton = document.getElementById('descriptionSubmit'),
      productCards = document.getElementsByClassName('carProductCard');

// function to encapsulate the adding of event listeners to all DOM elements
  oldCarLot.activateEvents = function (callBack) {
  	// event listener for keydown press in text input box for adding description
  	// to car product cards
    	descriptionInput.addEventListener('keydown', function (event) {
    		for (var i = 0, j = productCards.length; i < j; i++) {
    			let editDescription = productCards[i];

    			if (editDescription.classList.contains('active')) {
    				descriptionOutput = editDescription.querySelector(`#carDescription${i}`);
    				descriptionOutput.innerText = descriptionInput.value;
    			}
    		}
    	});
    // loop over dynamically created product cards and add event listeners
    	for (var i = 0, j = productCards.length; i < j; i++) {
    		let productCard = productCards[i];
    		productCard.addEventListener('click', function (clickEvent) {
    			CarLot.addStyles(clickEvent);
    		});
			}
  };
 return oldCarLot;
})(CarLot || {});

