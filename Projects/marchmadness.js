// Define teams
var teams = [
    "Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7", "Team 8",
    
    
];





















// Generate matchups for each round
// var rounds = [];
// rounds.push(teams);

// for (var i = 1; i <= 6; i++) {
//     var roundMatchups = [];
//     var teamsInRound = rounds[i - 1].length / 2;
//     for (var j = 0; j < teamsInRound; j++) {
//         roundMatchups.push([rounds[i - 1][j], rounds[i - 1][teamsInRound + j]]);
//     }
//     rounds.push(roundMatchups);
// }

// // Display the bracket
// var bracketDiv = document.querySelector('.bracket');

// rounds.forEach(function (round, roundIndex) {
//     var roundDiv = document.createElement('div');
//     roundDiv.classList.add('round');
//     roundDiv.innerHTML = '<h2>Round ' + (roundIndex + 1) + '</h2>';

//     round.forEach(function (matchup) {
//         var matchupDiv = document.createElement('div');
//         matchupDiv.classList.add('matchup');
//         matchupDiv.innerHTML = '<p>' + matchup[0] + ' vs ' + matchup[1] + '</p>';
//         roundDiv.appendChild(matchupDiv);
//     });

//     bracketDiv.appendChild(roundDiv);
//     console.log(round)
// });