(function(){

	function makeHover(button) {

		var phoneRegex = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i;

		if (!phoneRegex.test(navigator.userAgent.toLowerCase())) {

			button.addEventListener("mouseenter", function() {

				button.getElementsByClassName(button.getAttribute('id'))[0].classList.add('active');

			});

			button.addEventListener("mouseleave", function() {

				button.getElementsByClassName(button.getAttribute('id'))[0].classList.remove('active');

			});
		
		} else {

			element.addEventListener('touchstart', function() {

				element.classList.toggle('active');

			}, false);

		}

	}

	var buttons = document.getElementsByClassName('button');

	for (var n = 0; n < buttons.length; n++) {
		
		makeHover(buttons[n]);
	
	}

})();
