export function rps(shot) {
    let rpsRules = {
        rock: {
            rock:'tie',
            paper: 'lose',
            scissors: 'win',
        },

        paper: {
            rock:'win',
            paper: 'tie',
            scissors: 'lose',
        },

        scissors: {
            rock:'lose',
            paper: 'win',
            scissors: 'tie',
        }
    }
    shot = shot.toLowerCase()
    const shotchoices = ["rock", "paper", "scissors"];
    let randomNumber = Math.trunc(Math.random() * 3); //
    // If the command or function is called without an argument,
    // it should return only the shot for one player
    if(shot === undefined) {
        return  {"player": shotchoices[randomNumber]}
     }
    // If an out-of-range argument is supplied to your functions, 
    //the function should return an error on console.error() indicating that [ARGUMENT] is out of range.
    if (!shotchoices.includes(shot)) {
        return console.error("The shot is out of range.")
    }  
    //If the command or function is called with an argument, 
    //it should return the results of a game between a player and an opponent
    let endresult = rpsRules[shotchoices[randomNumber]][shot];
    return {player: shot, opponent: choices[randomNumber], result: endresult}
}

export function rpsls(shot) {
    let rpsRules = {
        rock: {
            rock:'tie',
            paper: 'lose',
            scissors: 'win',
            lizard: 'lose',
            spock: 'win'
        },

        paper: {
            rock:'win',
            paper: 'tie',
            scissors: 'lose',
            lizard: 'win',
            spock: 'lose'
        },

        scissors: {
            rock:'lose',
            paper: 'win',
            scissors: 'tie',
            lizard: 'lose',
            spock: 'win'
        },

        lizard: {
            rock:'win',
            paper: 'lose',
            scissors: 'win',
            lizard: 'draw',
            spock: 'lose'
        }, 

        spock: {
            rock:'lose',
            paper: 'win',
            scissors: 'lose',
            lizard: 'win',
            spock: 'tie'
        }
    }
    shot = shot.toLowerCase()
    const shotchoices = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomNumber = Math.trunc(Math.random() * 5); //
    // If the command or function is called without an argument,
    // it should return only the shot for one player
    if(shot === undefined) {
        return  {"player": shotchoices[randomNumber]}
     }
    // If an out-of-range argument is supplied to your functions, 
    //the function should return an error on console.error() indicating that [ARGUMENT] is out of range.
    if (!shotchoices.includes(shot)) {
        return console.error("The shot is out of range.")
    }  
    //If the command or function is called with an argument, 
    //it should return the results of a game between a player and an opponent
    let endresult = rpsRules[shotchoices[randomNumber]][shot];
    return {player: shot, opponent: choices[randomNumber], result: endresult}
}

