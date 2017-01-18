function game(choice){
    var computer=computerChoice();
if (choice==computer) {
    return 'Tie';
}else if (choice=='rock') {
    if(computer=='paper') {
        return 'Computer Chose Paper, Computer Wins';
    }else { return 'Player Wins'}
}else if (choice=='paper') {
    if (computer=='scissors') {
        return 'Computer Chose Scissors, Computer Wins';
    }else { return 'Player Wins'}
}else if (choice=='scissors') {
    if (computer=='rock') {
        return 'Computer Chose Rock, Computer Wins';
    }else {return 'Player Wins'}
};

function computerChoice() {
    var computerChoice= Math.random();
if (computerChoice <= .33) {
    return 'rock';
} else if ((computerChoice > .33) && (computerChoice <= .66)) {
    return 'paper';
} else if (computerChoice => .67) {
   return 'scissors';
}}};

function drawResult(result){
document.getElementById('result').innerHTML=result
}

function play(choice){
drawResult(game(choice))
}