
        // Here is a description of what this program should do.
        // The computer selects a random letter from the alphabet.
        // The user gets nine opportunities to enter a letter that matches the computer's choice.
        // If the user's letter matches the one from the computer, the user wins.
        // If the user's letter does not match the one from the computer (after nine rounds), the computer wins.
        // The user's wins will accumulate, and the user's losses will accumulate, as each game of nine rounds continues
        // The number of guesses remaining in the nine rounds will be displayed for the user. 
        // There will be a ongoing display of the user's selections for each of the nine rounds.
        // After the nine rounds, the game will reset (with the computer picking a new randowm number), the users previous
          // selections will be cleared, another nine rounds will be available, and the accumulated wins and losses will still be displayed.

        let log = console.log;

        // This is an array of all of the letters of the alphabet).
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        //This initializes/defines some variables.
        var wins = 0;
        var losses = 0;
        var computersSelection = null;
        var usersSelection = null;
        var counter = 9;

        listOfUsersSelections = "";


        //The calling of this function, later on, will reset the game.
        function resetGame() {
            computersSelection = null;
            counter = 9;
            listOfUsersSelections = "";
            list_OfUsersSelections = "";
            usersSelections = "";
        }

        // This onkeyup function is set up to be called each time the user presses a key.
        document.onkeyup = function (event) {

            // Randomly selects a letter from the array of letters of the alphabet. This is the computer's guess.
            if (computersSelection == null) {
                computersSelection = letters[Math.floor(Math.random() * letters.length)];
            }

            //This creates a variable containing the lowercase value of the key pressed by the user.
            var usersSelection = String.fromCharCode(event.keyCode).toLowerCase();

            //This "holds" the user's selection in the listOfUsersSelections variable so that a string of the user's selections will be displayed.
            listOfUsersSelections += usersSelection;
            list_OfUsersSelections = listOfUsersSelections.split("").join(", ");

            // This compares the letter the user selected with the letter the computer selected.
            // If the two match, wins will increment by 1 and the game will reset.
            if (usersSelection === computersSelection) {
                wins++;
                alert("You're psychic! You just won this round. Play again.");
                resetGame()
            }

            else {
                //The session counter will decrease by one after the user's selection and computer's selection have been compared, 
                //because there is no match and the counter is greater than zero.
                counter--;
            }

            //Once the nine sessions have been exhausted, and the counter reaches zero, losses will increment by 1 and the game will reset.
            if (counter === 0) {
                losses++;
                resetGame()
            }

            //This summary holds HTML code that keeps track of the user and computer selections, wins, losses, 
            //number of remaining sessions, and a string of user's selections.

            var html =
                "<h1> The Psychic Game! </h1>" +
                "<p>Your Wins: " + wins + "</p>" +
                "<p>Your Losses: " + losses + "</p>" +
                "<p>Number of selections remaining: " + counter + "</p>" +
                "<p>Your selections so far: " + list_OfUsersSelections + "<p>"

            // Set the inner summary contents of the #psychic_game div to this string
            document.querySelector("#psychic_game").innerHTML = html;
        }

        //This would just show me what is going on with these variables in the console view.
        //log("wins " + wins);
        //log("losses " + losses);
        //log("usersSelection " + usersSelection);
        //log("computersSelection " + computersSelection);