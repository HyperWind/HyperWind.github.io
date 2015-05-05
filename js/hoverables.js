(function(){

	function makeHover(button) {

		button.addEventListener("mouseenter", function() {

			button.getElementsByClassName(button.getAttribute('id'))[0].classList.add('active');

		});

		button.addEventListener("mouseleave", function() {

			button.getElementsByClassName(button.getAttribute('id'))[0].classList.remove('active');

		});

		button.addEventListener("click", function() {

			button.getElementsByClassName(button.getAttribute('id'))[0].classList.toggle('active');

		});

	}

	var buttons = document.getElementsByClassName('button');

	for (var n = 0; n < buttons.length; n++) {
		
		console.log(buttons[n]);
		makeHover(buttons[n]);
	
	}

})();
