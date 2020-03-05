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
	score: { // get one point per right answer
		totalScore: 0,
		currentHighScore: " ",
		highScoreHist: [], //push all game scores here
	},
	dogsPlayed: [], // stretch goal - display dogsCopy.img on "gameboard"
	allPossAnswers: ['Affenpinscher','Afghan Hound','Airedale Terrier','Akita','Alaskan Malamute','American Cocker Spaniel','American Eskimo Dog (Miniature)','American Eskimo Dog (Standard)','American Eskimo Dog (Toy)','American Foxhound','American Staffordshire Terrier','American Water Spaniel','Anatolian Shepherd','Australian Cattle Dog','Australian Shepherd','Australian Terrier','Basenji','Basset Hound','Beagle','Bearded Collie','Beauceron','Bedlington Terrier','Belgian Malinois','Belgian Sheepdog','Belgian Tervuren','Bernese Mountain Dog','Bichon Frise','Black and Tan Coonhound','Black Russian Terrier','Bloodhound','Border Collie','Border Terrier','Borzoi','Boston Terrier','Bouvier des Flandres','Boxer','Briard','Brittany','Brussels Griffon','Bull Terrier','Bulldog','Bullmastiff','Cairn Terrier','Canaan Dog','Cardigan Welsh Corgi','Cavalier King Charles Spaniel','Chesapeake Bay Retriever','Chihuahua','Chinese Crested Dog','Chinese Shar-Pei','Chow Chow','Clumber Spaniel','Collie','Curly-Coated Retriever','Dachshund (Miniature)','Dachshund (Standard)','Dalmatian','Dandie Dinmont Terrier','Doberman Pinscher','English Cocker Spaniel','English Foxhound','English Setter','English Springer Spaniel','English Toy Spaniel','Field Spaniel','Finnish Spitz','Flat-Coated Retriever','French Bulldog','German Pinscher','German Shepherd Dog','German Shorthaired Pointer','German Wirehaired Pointer','Giant Schnauzer','Glen of Imaal Terrier','Golden Retriever','Gordon Setter','Great Dane','Great Pyrenees','Greater Swiss Mountain Dog','Greyhound','Harrier','Havanese','Ibizan Hound','Irish Setter','Irish Terrier','Irish Water Spaniel','Irish Wolfhound','Italian Greyhound','Japanese Chin','Keeshond','Kerry Blue Terrier','Komondor','Kuvasz','Labrador Retriever','Lakeland Terrier','Lhasa Apso','Lowchen','Maltese','Manchester Terrier (Standard)','Manchester Terrier (Toy)','Mastiff','Miniature Bull Terrier','Miniature Pinscher','Miniature Schnauzer','Neapolitan Mastiff','Newfoundland','Norfolk Terrier','Norwegian Elkhound','Norwich Terrier','Nova Scotia Duck Tolling Retriever','Old English Sheepdog','Otterhound','Papillon','Parson Russell Terrier','Pekingese','Pembroke Welsh Corgi','Petit Basset Griffon Vendeen','Pharaoh Hound','Plott','Pointer','Polish Lowland Sheepdog','Pomeranian','Poodle (Miniature)','Poodle (Standard)','Poodle (Toy)','Portuguese Water Dog','Pug','Puli','Redbone Coonhound','Rhodesian Ridgeback','Rottweiler','Saint Bernard','Saluki (or Gazelle Hound)','Samoyed','Schipperke','Scottish Deerhound','Scottish Terrier','Sealyham Terrier','Shetland Sheepdog','Shiba Inu','Shih Tzu','Siberian Husky','Silky Terrier','Skye Terrier','Smooth Fox Terrier','Soft Coated Wheaten Terrier','Spinone Italiano','Staffordshire Bull Terrier','Standard Schnauzer','Sussex Spaniel','Tibetan Mastiff','Tibetan Spaniel','Tibetan Terrier','Toy Fox Terrier','Vizsla','Weimaraner','Welsh Springer Spaniel','Welsh Terrier','West Highland White Terrier','Whippet','Wire Fox Terrier','Wirehaired Pointing Griffon','Yorkshire Terrier'],
	splicedPossAnswers: [],
	getPossibleAnswers() {
		// function to get 3 random elements from possibleAnswers
		// add them to a new array multChoiceArr that contains the real answer
		// reorder the new array
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
		// create a radio button (label and input) for each array element
		// create a submit button
		// not sure if I need labels "<label>"+multChoice[i].breedName+"</label>"
		$("#gameboard").append("<div id=poss-answers></div>");
		$("#poss-answers").append("<form id=mult-choice>What's my breed?</form>");
		for (let i = this.multChoice.length - 1; i >= 0; i--) {
		$("form").append(`
			<div>
			<input id="${this.multChoice[i]}" name="breeds" value="${this.multChoice[i]}" type="radio">
			<label for="${this.multChoice[i]}">${this.multChoice[i]}</label>
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
		// create cells - this.score.currentHighScore, this.round, this.score.totalScore
		$("#gameboard").append("<table></table");
		$("table").append(`<tr></tr>, <td>HIGH SCORE</td>, <td id=high-score>${this.score.currentHighScore}</td>, <tr></tr>, <td>Round</td>, <td id=round>1</td>, <tr></tr>, <td>Score</td>, <td id=score>0</td>`)
	},
	updateScoreboard() {
		game.round + 1;
		$("#round").text(`${this.round}`);
		$("#score").text(`${this.score.totalScore}`);
	},
	getHighScore() {
		// sort highScoreHist to get highest score
		// set highest score to new variable
		// if player's total score is greater than highest score, display "game over - you beat the high score" message
		// else if player's total score is equal to the highest core, display "game over - tied high score" message
		// else display "game over" message
		this.score.highScoreHist.sort(function(a, b){return b-a});
		this.score.currentHighScore = this.score.highScoreHist[0];
		if(this.score.totalScore > this.score.currentHighScore) {
			this.score.currentHighScore = this.score.totalScore;
			return("Game over! You beat the high score!")
		} else if(this.score.totalScore === this.score.currentHighScore) {
			return("Game over! You tied the high score!");
		} else {
			return("Game over! Keep studying your pups!");
		}
		$("#next").remove();
	},
	makeGameboard() {
		$("#gameboard").append("<img id='dog-dealt' src='https://placebear.com/200/200' alt='dog photo'>");
		$("#start").remove();
	},
	dealDog() {
		// get one dog from dogsCopy at random
		// set answer variable - let answer = dog.breedName
		// push answer variable to multChoice array
		// push played dog to dogsPlayed array
		// remove dealt dog from dogsCopy
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
		// compare player's input to answer
		// if score is 0, display "keep studying"
		// if score is 1, display "good job"
		// if player's input === answer, += 1
		// if round equals 5, push totalScore to highScoreHist and invoke getHighScore
		if(this.round < 5) {
			if(input === this.correctAnswer) {
			this.score.totalScore += 100;
			this.updateScoreboard();
			alert("Good work, you scored 100 points!")
		} else {
			alert("Keep studing your dogs. You'll get em' next time.");
		} 
	} if(this.round === 5) {
		if(input === this.correctAnswer) {
		this.score.totalScore += 100;
		this.score.highScoreHist.push(this.score.totalScore);
		this.getHighScore();
			}
		}	
	},
	// timeRound() {
		// TODO - stretch goal
		// asynchronous function setTimer
		//setTimeout(function() {
			//console.log('setTimeout code')
		//}, 10000);
		// give different amount of time if playing the accessible version
	//},
	playDog() {
		game.makeScoreboard();
		game.makeGameboard();
		game.dealDog();
		game.getPossibleAnswers();
		game.dispPossibleAnswers();
	},
	resetGameboard() {
		$("#gameboard").append("<button id=next-round>Next Round</button>")
		let nextBtn = document.getElementById("next-round");
		nextBtn.addEventListener('click', this.playNext);
	},
	playNext() {
		game.dealDog();
		game.getPossibleAnswers();
		game.dispPossibleAnswers();
		$("#next-round").remove();
	}
};


player = {
	getPlayerInput(event) {
		//this.submitAnswer(playerAnswer);
		let playerAnswer = event.target.value;
		player.submitAnswer(playerAnswer);
	},
	submitAnswer(input) {
		// invokes game.scoreRound
		// create/display next button
		// clear multChoice - can I just reset the array?
		game.scoreRound(input, game.correctAnswer);
		game.updateScoreboard();
		game.remPossibleAnswers();
		game.multChoice = [];
		game.correctAnswer= " ";
		game.allPossAnswers = game.allPossAnswers.concat(game.splicedPossAnswers);
		game.resetGameboard();
	}
};

let startBtn = document.getElementById("start");

startBtn.addEventListener('click', game.playDog);























