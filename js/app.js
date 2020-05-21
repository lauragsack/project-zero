console.log("check!");

dogs = [
{breedName: 'American Foxhound', img: 'https://i.imgur.com/S3VbpRpb.jpg'},
{breedName: 'Australian Cattle Dog', img: 'https://i.imgur.com/kug5Ssnb.jpg'},
{breedName: 'Basset Hound', img: 'https://i.imgur.com/Kgk2D6gb.jpg'},
{breedName: 'Bernese Mountain Dog', img: 'https://i.imgur.com/63W6l1Mb.jpg'},
{breedName: 'Black and Tan Coonhound', img: 'https://i.imgur.com/SinrhrWb.jpg'},
{breedName: 'Bloodhound', img: 'https://i.imgur.com/3kLwCTmb.jpg'},
{breedName: 'Boxer', img: 'https://i.imgur.com/dZfhT2mb.jpg'},
{breedName: 'Chinese Shar-Pei', img: 'https://i.imgur.com/gP5ELwbb.jpg'},
{breedName: 'Collie', img: 'https://i.imgur.com/7WUO3Tzb.jpg'},
{breedName: 'Curly-Coated Retriever', img: 'https://i.imgur.com/B6gsdcCb.jpg'},
{breedName: 'English Setter', img: 'https://i.imgur.com/QGZcqBob.jpg'},
{breedName: 'French Bulldog', img: 'https://i.imgur.com/9603BqJb.jpg'},
{breedName: 'German Shepherd Dog', img: 'https://i.imgur.com/Pc9Ncb.jpg'},
{breedName: 'Golden Retriever', img: 'https://i.imgur.com/bFodWF4b.jpg'},
{breedName: 'Irish Wolfhound', img: 'https://i.imgur.com/HK4d5Y3b.jpg'},
{breedName: 'Labrador Retriever', img: 'https://i.imgur.com/WzzsIHjb.jpg'},
{breedName: 'Maltese', img: 'https://i.imgur.com/uW27yjzb.jpg'},
{breedName: 'Mastiff', img: 'https://i.imgur.com/AXWJWE4b.jpg'},
{breedName: 'Papillon', img: 'https://i.imgur.com/wuyDVb.jpg'},
{breedName: 'Pembroke Welsh Corgi', img: 'https://i.imgur.com/dKWb7oVb.jpg'},
{breedName: 'Poodle (Miniature)', img: 'https://i.imgur.com/fgLFMQwb.jpg'},
{breedName: 'Saint Bernard', img: 'https://i.imgur.com/JPoy0xjb.jpg'},
{breedName: 'Cavalier King Charles Spaniel', img: 'https://i.imgur.com/kBPjWuTb.jpg'},
{breedName: 'Standard Schnauzer', img: 'https://i.imgur.com/4ZUZqkXb.jpg'},
{breedName: 'Vizsla', img: 'https://i.imgur.com/zvGWW8Fb.jpg'},
{breedName: 'Whippet', img: 'https://i.imgur.com/lH0GH1Db.jpg'},
{breedName: 'Yorkshire Terrier', img: 'https://i.imgur.com/jD4z8cub.jpg'}
];


game = {
	dogsCopy: dogs, 
	round: 1,
	correctAnswer: " ",
	score: {
		totalScore: 0,
	},
	dogsPlayed: [],
	allPossAnswers: ['Affenpinscher','Afghan Hound','Airedale Terrier','Akita','Alaskan Malamute','American Cocker Spaniel','American Eskimo Dog (Miniature)','American Eskimo Dog (Standard)','American Eskimo Dog (Toy)','American Foxhound','American Staffordshire Terrier','American Water Spaniel','Anatolian Shepherd','Australian Cattle Dog','Australian Shepherd','Australian Terrier','Basenji','Basset Hound','Beagle','Bearded Collie','Beauceron','Bedlington Terrier','Belgian Malinois','Belgian Sheepdog','Belgian Tervuren','Bernese Mountain Dog','Bichon Frise','Black and Tan Coonhound','Black Russian Terrier','Bloodhound','Border Collie','Border Terrier','Borzoi','Boston Terrier','Bouvier des Flandres','Boxer','Briard','Brittany','Brussels Griffon','Bull Terrier','Bulldog','Bullmastiff','Cairn Terrier','Canaan Dog','Cardigan Welsh Corgi','Cavalier King Charles Spaniel','Chesapeake Bay Retriever','Chihuahua','Chinese Crested Dog','Chinese Shar-Pei','Chow Chow','Clumber Spaniel','Collie','Curly-Coated Retriever','Dachshund (Miniature)','Dachshund (Standard)','Dalmatian','Dandie Dinmont Terrier','Doberman Pinscher','English Cocker Spaniel','English Foxhound','English Setter','English Springer Spaniel','English Toy Spaniel','Field Spaniel','Finnish Spitz','Flat-Coated Retriever','French Bulldog','German Pinscher','German Shepherd Dog','German Shorthaired Pointer','German Wirehaired Pointer','Giant Schnauzer','Glen of Imaal Terrier','Golden Retriever','Gordon Setter','Great Dane','Great Pyrenees','Greater Swiss Mountain Dog','Greyhound','Harrier','Havanese','Ibizan Hound','Irish Setter','Irish Terrier','Irish Water Spaniel','Irish Wolfhound','Italian Greyhound','Japanese Chin','Keeshond','Kerry Blue Terrier','Komondor','Kuvasz','Labrador Retriever','Lakeland Terrier','Lhasa Apso','Lowchen','Maltese','Manchester Terrier (Standard)','Manchester Terrier (Toy)','Mastiff','Miniature Bull Terrier','Miniature Pinscher','Miniature Schnauzer','Neapolitan Mastiff','Newfoundland','Norfolk Terrier','Norwegian Elkhound','Norwich Terrier','Nova Scotia Duck Tolling Retriever','Old English Sheepdog','Otterhound','Papillon','Parson Russell Terrier','Pekingese','Pembroke Welsh Corgi','Petit Basset Griffon Vendeen','Pharaoh Hound','Plott','Pointer','Polish Lowland Sheepdog','Pomeranian','Poodle (Miniature)','Poodle (Standard)','Poodle (Toy)','Portuguese Water Dog','Pug','Puli','Redbone Coonhound','Rhodesian Ridgeback','Rottweiler','Saint Bernard','Saluki (or Gazelle Hound)','Samoyed','Schipperke','Scottish Deerhound','Scottish Terrier','Sealyham Terrier','Shetland Sheepdog','Shiba Inu','Shih Tzu','Siberian Husky','Silky Terrier','Skye Terrier','Smooth Fox Terrier','Soft Coated Wheaten Terrier','Spinone Italiano','Staffordshire Bull Terrier','Standard Schnauzer','Sussex Spaniel','Tibetan Mastiff','Tibetan Spaniel','Tibetan Terrier','Toy Fox Terrier','Vizsla','Weimaraner','Welsh Springer Spaniel','Welsh Terrier','West Highland White Terrier','Whippet','Wire Fox Terrier','Wirehaired Pointing Griffon','Yorkshire Terrier'],
	splicedPossAnswers: [],
	rightAnswers: [], 
	getPossibleAnswers() {
		for(let i = 0; i < 4; i++) {
		let randInd = Math.floor(Math.random() * this.allPossAnswers.length)
		let randAnswer = this.allPossAnswers[randInd];
		if(randAnswer === this.correctAnswer) {
			this.splicedPossAnswers.push(randAnswer)
			this.allPossAnswers.splice(randInd, 1);
		} else {
			this.multChoice.push(randAnswer);
		} if (this.multChoice.length > 4) {
			this.multChoice.pop();
		}
	}	
	this.multChoice.sort();
	},
	multChoice: [],
	dispPossibleAnswers() {
		$("#gameboard").append("<div id=poss-answers></div>");
		$("#poss-answers").append("<form id=mult-choice>What's my breed?</form>");
		for (let i = this.multChoice.length - 1; i >= 0; i--) {
		$("form").append(`
			<div>
			<input id="${this.multChoice[i]}" name="breeds" value="${this.multChoice[i]}" type="radio">
			<label for="${this.multChoice[i]}" value="${this.multChoice[i]}">${this.multChoice[i]}</label>
			</div>
		`);
			}
			let radios = document.forms[0];
			radios.addEventListener('click', player.getPlayerInput);
	},
	remPossibleAnswers() {
		$("#poss-answers").remove();
	},
	makeScoreboard() {
		$("#gameboard").append("<table></table");
		$("table").append(`<tr></tr>, <td>Round: </td>, <td id=round>1</td>, <tr></tr>, <td>Score: </td>, <td id=score>0</td>`)
	},
	updateScore() {
		$("#score").text(`${this.score.totalScore}`);
	},
	updateRound() {
		this.round += 1;
		$("#round").text(`${this.round}`);
	},
	gameOver() {
		this.updateScore();
		this.remPossibleAnswers();
		alert(`Game over! You booped these breeds on the nose: ${this.rightAnswers}. Click 'Play Again' to keep up your pup skills!`);
		$("#gameboard").append(`<button id=play-again>Play Again</button`);
		let againBtn = document.getElementById("play-again");
		againBtn.addEventListener('click', this.playAgain);
	},
	makeGameboard() {
		$("#gameboard").append("<img id='dog-dealt' src='https://placebear.com/200/200' alt='dog photo'>");
		$("#gameboard").append("<div id=wrapper></div>");
	},
	dealDog() {
		let randIndex = Math.floor(Math.random() * this.dogsCopy.length);
		let randDog = this.dogsCopy[randIndex];
		this.dogsPlayed.push(randDog);
		this.multChoice.push(randDog.breedName);
		this.correctAnswer = randDog.breedName;
		$("#dog-dealt").attr("src", randDog.img); 
		for(let i = this.dogsCopy.length - 1; i >= 0; i--) {
			if(this.dogsCopy[i].breedName === randDog.breedName) {
				this.dogsCopy.splice(randIndex, 1);
			}
		}
	},
	scoreRound(input, answer) {
		if(this.round < 5) {
			if(input === this.correctAnswer) {
				this.score.totalScore += 100;
				this.updateScore();
				this.rightAnswers.push(input);
				alert("Good work, you scored 100 points!")
			} else {
				alert("Keep studing your dogs. You'll get 'em next time.");
			} 
		} 
		debugger;
		if(this.round >= 5) {
			if(input === this.correctAnswer) {
				this.score.totalScore += 100;
				this.rightAnswers.push(input);
				alert("Good work, you scored 100 points!")
				this.gameOver();
			} else {
				alert("Keep studing your dogs. You'll get 'em next time.");
				this.gameOver();
			}
		}
	},
	playDog() {
		$("#start").remove();
		$("h2").remove();
		$("h3").remove();
		$("p").remove();
		game.makeScoreboard();
		game.makeGameboard();
		game.dealDog();
		game.getPossibleAnswers();
		game.dispPossibleAnswers();
	},
	playNext() {
		game.dealDog();
		game.getPossibleAnswers();
		game.dispPossibleAnswers();
		game.updateRound();
	},
	playAgain() {
		game.round = 1;
		game.score.totalScore = 0;
		game.dogsCopy = dogs;
		game.dogsPlayed = [];
		game.rightAnswers = [];
		$("table").remove();
		$("#dog-dealt").remove();
		$("#play-again").remove();
		game.makeScoreboard();
		game.makeGameboard();
		game.dealDog();
		game.getPossibleAnswers();
		game.dispPossibleAnswers();	
	}
};


player = {
	getPlayerInput(event) {
		if(event.target !== "undefined") {
			let playerAnswer = event.target.value || event.target.getAttribute('value');
			player.submitAnswer(playerAnswer);
		} else {
			return false;
		}
	},
	submitAnswer(input) {
		if(game.round <= 4) {
			game.scoreRound(input, game.correctAnswer);
			game.updateScore();
			game.remPossibleAnswers();
			game.multChoice = [];
			game.correctAnswer = " ";
			game.allPossAnswers = game.allPossAnswers.concat(game.splicedPossAnswers);
			game.playNext();
		} else {
			game.scoreRound(input, game.correctAnswer);
			game.updateScore();
			game.remPossibleAnswers();
			game.multChoice = [];
			game.correctAnswer = " ";
			game.allPossAnswers = game.allPossAnswers.concat(game.splicedPossAnswers);
		}
	} 
};

let startBtn = document.getElementById("start");

startBtn.addEventListener('click', game.playDog);
























