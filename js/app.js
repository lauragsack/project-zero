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
{breedName: 'Smooth Fox Terrier', img: 'https://i.imgur.com/kBPjWuTb.jpg'},
{breedName: 'Standard Schnauzer', img: 'https://i.imgur.com/4ZUZqkXb.jpg'},
{breedName: 'Vizsla', img: 'https://i.imgur.com/zvGWW8Fb.jpg'},
{breedName: 'Whippet', img: 'https://i.imgur.com/lH0GH1Db.jpg'},
{breedName: 'Yorkshire Terrier', img: 'https://i.imgur.com/jD4z8cub.jpg'}
];


game = {
	dogsCopy: dogs, 
	round: 1,
	score: { // get one point per right answer
		roundScore: 0,
		totalScore: 0,
		currentHighScore: 0,
		highScoreHist: [], //push all game scores here
	},
	dogsPlayed: [], // stretch goal - display dogsCopy.img on "gameboard"
	allPossAnswers: ['Affenpinscher','Afghan Hound','Airedale Terrier','Akita','Alaskan Malamute','American Cocker Spaniel','American Eskimo Dog (Miniature)','American Eskimo Dog (Standard)','American Eskimo Dog (Toy)','American Foxhound','American Staffordshire Terrier','American Water Spaniel','Anatolian Shepherd','Australian Cattle Dog','Australian Shepherd','Australian Terrier','Basenji','Basset Hound','Beagle','Bearded Collie','Beauceron','Bedlington Terrier','Belgian Malinois','Belgian Sheepdog','Belgian Tervuren','Bernese Mountain Dog','Bichon Frise','Black and Tan Coonhound','Black Russian Terrier','Bloodhound','Border Collie','Border Terrier','Borzoi','Boston Terrier','Bouvier des Flandres','Boxer','Briard','Brittany','Brussels Griffon','Bull Terrier','Bulldog','Bullmastiff','Cairn Terrier','Canaan Dog','Cardigan Welsh Corgi','Cavalier King Charles Spaniel','Chesapeake Bay Retriever','Chihuahua','Chinese Crested Dog','Chinese Shar-Pei','Chow Chow','Clumber Spaniel','Collie','Curly-Coated Retriever','Dachshund (Miniature)','Dachshund (Standard)','Dalmatian','Dandie Dinmont Terrier','Doberman Pinscher','English Cocker Spaniel','English Foxhound','English Setter','English Springer Spaniel','English Toy Spaniel','Field Spaniel','Finnish Spitz','Flat-Coated Retriever','French Bulldog','German Pinscher','German Shepherd Dog','German Shorthaired Pointer','German Wirehaired Pointer','Giant Schnauzer','Glen of Imaal Terrier','Golden Retriever','Gordon Setter','Great Dane','Great Pyrenees','Greater Swiss Mountain Dog','Greyhound','Harrier','Havanese','Ibizan Hound','Irish Setter','Irish Terrier','Irish Water Spaniel','Irish Wolfhound','Italian Greyhound','Japanese Chin','Keeshond','Kerry Blue Terrier','Komondor','Kuvasz','Labrador Retriever','Lakeland Terrier','Lhasa Apso','Lowchen','Maltese','Manchester Terrier (Standard)','Manchester Terrier (Toy)','Mastiff','Miniature Bull Terrier','Miniature Pinscher','Miniature Schnauzer','Neapolitan Mastiff','Newfoundland','Norfolk Terrier','Norwegian Elkhound','Norwich Terrier','Nova Scotia Duck Tolling Retriever','Old English Sheepdog','Otterhound','Papillon','Parson Russell Terrier','Pekingese','Pembroke Welsh Corgi','Petit Basset Griffon Vendeen','Pharaoh Hound','Plott','Pointer','Polish Lowland Sheepdog','Pomeranian','Poodle (Miniature)','Poodle (Standard)','Poodle (Toy)','Portuguese Water Dog','Pug','Puli','Redbone Coonhound','Rhodesian Ridgeback','Rottweiler','Saint Bernard','Saluki (or Gazelle Hound)','Samoyed','Schipperke','Scottish Deerhound','Scottish Terrier','Sealyham Terrier','Shetland Sheepdog','Shiba Inu','Shih Tzu','Siberian Husky','Silky Terrier','Skye Terrier','Smooth Fox Terrier','Soft Coated Wheaten Terrier','Spinone Italiano','Staffordshire Bull Terrier','Standard Schnauzer','Sussex Spaniel','Tibetan Mastiff','Tibetan Spaniel','Tibetan Terrier','Toy Fox Terrier','Vizsla','Weimaraner','Welsh Springer Spaniel','Welsh Terrier','West Highland White Terrier','Whippet','Wire Fox Terrier','Wirehaired Pointing Griffon','Yorkshire Terrier'],
	getPossibleAnswers() {
		// function to get 3 random elements from possibleAnswers
		// add them to a new array multChoiceArr that contains the real answer
		// reorder the new array
		for (let i = 0; i < 3; i++) {
			let randAnswer = allPossAnswers[Math.floor(Math.random() * allPossAnswers.length)];
			multChoice.push(randAnswer);
			return multChoice.sort(function(a, b) {return 0.5 - Math.random()}); // why .5?
		}
	},
	multChoice: [],
	dispPossibleAnswers() {
		// create a radio button (label and input) for each array element - https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_label
		$("#gameboard").append("<div id=poss-answers></div>");
		$("#poss-answers").append()
		// create a submit button
		$

	},
	remPossibleAnswers() {
		$("#poss-answers").remove();
	},
	makeScoreboard() {
		$("#gameboard").append("<table>Scoreboard</table");
		// TODO
	}
	getHighScore() {
		// TODO
		// sort highScoreHist to get highest score
		// set highest score to new variable
		// if player's total score is greater than highest score, display "game over - you beat the high score" message
		// else if player's total score is equal to the highest core, display "game over - tied high score" message
		// else display "game over" message
	},
	answer: " ",
	dealDog() {
		// get one dog from dogsCopy at random
		// set answer variable - let answer = dog.breed
		// push answer variable to multChoice array
		// push played dog to dogsPlayed array
		// remove dealt dog from dogsCopy
		let randDog = dogsCopy[Math.floor(Math.random() * dogsCopy.length)];
		dogsPlayed.push(randDog);
		multChoice.push(randDog);
		let answer = randDog.breed;
		$("#gameboard").append("<img id=dog-dealt src="" alt="dog photo">") // move this to separate function so we don't recreate this each time

		$("dog-dealt").attr("src", randDog.img);
		for(let i = dogsCopy.length - 1; i >= 0; i--) {
			if(dogsCopy[i].breed === randDog.breed) {
				dogsCopy.splice(randDog, 1);
			}
		}
	},
	scoreRound(playerInput, answer) {
		// compare player's input to answer
		// if score is 0, display "keep studying"
		// if score is 1, display "good job"
		// if player's input === answer, += 1
		// if round equals 10, push totalScore to highScoreHist and invoke getHighScore
		if(this.round < 10) {
			if(playerInput === answer) {
			this.roundScore += 1;
			this.totalScore += 1;
			// TODO
			// update scoreBoard table
			alert("Good work, you scored a point!")
		} else {
			alert("Keep studing your dogs. You'll get it next time.");
		} 
	} if(this.round === 10) {
		if(playerInput === answer) {
		this.roundScore += 1;
		this.totalScore += 1;
		this.highScoreHist.push(this.totalScore);
		getHighScore();
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
		makeScoreboard();
		dealDog();
		getPossAnswers();
	}
	//makeDonation() {
		// TODO - stretch goal
		// At end of game - "Enjoying this game? Love dogs? Us too! Consider dontating: link to donation'
	//}
};


player = {
	getPlayerInput() {
		// how do I create a variable from player's input - event listener for radio button element?
	}
	submitAnswer(input) {
		// invokes game.scoreRound
		// create/display next button
		// clear multChoice - can I just reset the array?
		game.scoreRound(playerInput, answer)
		// TODO - create next button
		game.multChoice = [];
		game.answer = " ";

	}
};

let startBtn = document.getElementById("start");
let submitBtn = document.getElementById("submit");
let nextBtn = document.getElementById("next");
let radioBtn = document.querySelector()

startBtn.addEventListener('click', playDog);
submitBtn.addEventListener('click', submitAnswer);
nextBtn.addEventListener('click', remPossibleAnswers);
nextBtn.addEventListener('click', playDog); // create button
// TODO - create event listener for radio buttons



// could write a function to loop 10x
for (let i = 0; i <= 10; i++) {
	game.round = i;
	// update round heading;
	game.playDog();
	player.getPlayerInput();
}


























