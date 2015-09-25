(function() {

    var name = document.getElementById('name');
    var things = document.getElementById('things');
    var contact = document.getElementById('contact');
    var jsonArr = [
	'http://arbatosmeistrai.lt',
	'http://atostogoskemperiu.lt'
    ];
    var intervalID = 0;
    var nameSet = true;
    var contactsSet = true;
    
    var startTitleRotation = function() {

	var counter = 0;
	var site;
	var changeFun = function() {

	    site = jsonArr[counter % jsonArr.length];
	    things.innerHTML = 'built <span class="shake shake-little shake-constant"><a href="' + site + '">' + site + '</a></span>';
	    counter++;

	};
	
	if (intervalID === 0) {

	    changeFun();
	    intervalID = setInterval(changeFun, 2000);

	}
	
    };

    var stopTitleRotation = function() {

	clearInterval(intervalID);
	things.innerHTML = 'build <span class="shake shake-little shake-constant">things</span>';
	intervalID = 0;

    };

    var toggleTwo = function(element, test, first, second) {

	element.innerHTML = test ? first : second;
	return !test;
	
    };
    
    if (!mobileCheck()) {

	name.addEventListener('mouseenter', function() {

	    nameSet = toggleTwo(name, nameSet, 'Karolis Lasys', 'HyperWind');

	});

	name.addEventListener('mouseleave', function() {

	    nameSet = toggleTwo(name, nameSet, 'Karolis Lasys', 'HyperWind');

	});

	contact.addEventListener('mouseenter', function() {

	    contactsSet = toggleTwo(contact, contactsSet, 'karolioofficial@outlook.com', 'contact me.');

	});
	
	contact.addEventListener('mouseleave', function() {

	    contactsSet = toggleTwo(contact, contactsSet, 'karolioofficial@outlook.com', 'contact me.');

	});
    
	things.addEventListener('mouseenter', startTitleRotation);

	things.addEventListener('mouseleave', stopTitleRotation);

    } else {

	name.addEventListener('click', function() {

	    nameSet = toggleTwo(name, nameSet, 'Karolis Lasys', 'HyperWind');

	});

	contact.addEventListener('click', function() {

	    contactsSet = toggleTwo(contact, contactsSet, 'karolioofficial@outlook.com', 'contact me.');

	});

	things.addEventListener('click', function() {

	    if (intervalID === 0) {
		startTitleRotation();
	    } else {
		stopTitleRotation();
	    }

	});
	
    }
	
}());
