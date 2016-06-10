var CarLot = (function (oldCarLot) {
	var productCards = document.getElementsByClassName('carProductCard');

	oldCarLot.resetStyles = function () {
		for (var i = 0, j = productCards.length; i < j; i++) {
			let productCard = productCards[i];
					productCard.classList.add('defaultStyles');
		}
	};

	oldCarLot.addStyles = function (clickEvent, color) {
	  var inventory = CarLot.getInventory();
		for (var i = 0, j =  productCards.length; i < j; i++) {
			let productCard = productCards[i],
					color = inventory[i].color;
			// set border color to be the color of the car
			productCard.style.borderColor = `${color}`;
		}
	};

return oldCarLot;
})(CarLot || {});




// CarLot.activateEvents(function (clickEvent) {
// 			// on click focus on text input for car description
// 			descriptionInput.focus();
// 			// loop to reset border width to default
// 			for (var x = 0, y = productCards.length; x < y; x++) {
// 				let removeBorderCards = productCards[x];
// 				// remove border from cards
// 						removeBorderCards.classList.remove('borderWidth');
// 						removeBorderCards.classList.remove('active');
// 			}
// 			let clickedCard = clickEvent.currentTarget;
// 			// add border width class on click
// 					clickedCard.classList.add('borderWidth');
// 					clickedCard.classList.add('active');
// });