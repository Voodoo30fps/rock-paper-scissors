let selectionMenu = document.querySelector('.selection-menu');
let playMenu = document.querySelector('.play-menu-wrapper');

let score = 0;
let options = document.querySelectorAll('.selection-menu .icon');

let optionsClass = ["paper", "scissors", "rock"];
let optionsUrl = ["images/icon-paper.svg", "images/icon-scissors.svg", "images/icon-rock.svg"];

let iconClassDestinationPlayer = document.querySelector('.play-menu-wrapper .play-menu .icon.player');
let iconDestinationPlayer = document.querySelector('.play-menu-wrapper .play-menu .icon.player .inner img');

let iconClassDestinationHouse = document.querySelector('.play-menu-wrapper .play-menu .icon.house');
let iconDestinationHouse = document.querySelector('.play-menu-wrapper .play-menu .icon.house .inner');

let playAgain = document.querySelector('.play-again-button');
let outcomeOptions = ["win", "lose", "tie"];

function decider(player, house) {
	if (player == house) {
		return 'tie';
	}

	if ((player + 1 == house) || (player == 1 && house == 2)) {
		score--;
		return 'lose';
	}

	score++;
	return 'win';
}

options.forEach((optionButton, index) => {
  	optionButton.addEventListener("click", () => {
  		playerOption = index;

  		selectionMenu.classList.add("hidden");
  		playMenu.classList.remove("hidden");

  		iconClassDestinationPlayer.classList.add(optionsClass[playerOption]);
  		iconDestinationPlayer.src = optionsUrl[playerOption];

  		let delay = 1000;
		setTimeout(function() {
  			let houseOption = Math.floor(Math.random() * 3);

  			iconClassDestinationHouse.classList.remove("empty");
  			iconClassDestinationHouse.classList.add(optionsClass[houseOption]);

  			let houseImg = document.createElement('img');
  			houseImg.src = optionsUrl[houseOption];
  			iconDestinationHouse.appendChild(houseImg);

  			setTimeout(function() {
  				playMenu.classList.add('with-result');

  				setTimeout(function() {
	  				document.querySelector('.' + decider(playerOption, houseOption)).classList.remove("hidden");
	  				document.querySelector('.score .counter').innerHTML = score;

	  				setTimeout(function() {
	  					playAgain.classList.remove('hidden');
	  				}, delay/2);		
  				}, delay/2);
			}, delay/2);
		}, delay);
	});
});


playAgain.addEventListener("click", () => {
	playAgain.classList.add("hidden");

	outcomeOptions.forEach((outcomeText, index) => {
		if (!document.querySelector('.' + outcomeText).classList.contains("hidden")) {
			document.querySelector('.' + outcomeText).classList.add("hidden");
		}
	});

	playMenu.classList.remove("with-result");

	iconClassDestinationHouse.classList.add("empty");
	optionsClass.forEach((option, index) => {
		if (iconClassDestinationHouse.classList.contains(option)) {
			iconClassDestinationHouse.classList.remove(option);
		}
	});
	iconDestinationHouse.innerHTML = '';

	optionsClass.forEach((option, index) => {
		if (iconClassDestinationPlayer.classList.contains(option)) {
			iconClassDestinationPlayer.classList.remove(option);
		}
	});

	playMenu.classList.add("hidden");
	selectionMenu.classList.remove("hidden");
});