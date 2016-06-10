var CarLot = (function (oldCarLot) {
	var productCards = document.getElementsByClassName('carProductCard');

	oldCarLot.resetStyles = function () {
		for (var i = 0, j = productCards.length; i < j; i++) {
			let productCard = productCards[i];
					productCard.classList.add('defaultStyles');
		}
		var inventory = CarLot.getInventory();
		for (var i = 0, j =  productCards.length; i < j; i++) {
			let productCard = productCards[i],
					color = inventory[i].color;
			// set border color to be the color of the car
			productCard.style.borderColor = `${color}`;
		}
	};

	oldCarLot.addStyles = function (click, color) {
		// loop to reset border width to default
		for (var x = 0, y = productCards.length; x < y; x++) {
			let removeBorderCards = productCards[x];
			// remove border from cards
					removeBorderCards.classList.remove('borderWidth');
					removeBorderCards.classList.remove('backgroundColor');
					removeBorderCards.classList.remove('active');
		}
		// grab clicked card for manipulation
		let clickedCard = click.currentTarget;
			// add border width class on click
					clickedCard.classList.add('borderWidth');
					clickedCard.classList.add('backgroundColor');
					clickedCard.classList.add('active');

		// on click focus on text input for car description
		descriptionInput.focus();
	};

return oldCarLot;
})(CarLot || {});

