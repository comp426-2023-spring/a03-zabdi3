#!/usr/bin/env node
import minimist from 'minimist'
import { rps } from '../lib/rpsls';

var args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    help()
}
if (args.r || args.rules) {
    rules()
}
// If an unlabeled argument is supplied but is out of range,
// and the function should return an out-of-range error, 
// and the error handler in the CLI wrapper should return a help/usage message AND listing of rules

try {
    console.log(JSON.stringify(rps(args._[0])));
} catch (shoterror) {
    if (shoterror instanceof RangeError) {
        console.log(`Error: ${args._[0]} is out of range.`);
        rules();
    }
}

function help() {
    console.log(
        `Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`
    );
    process.exit(0);
}

function rules() {
    console.log(
        `Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    );
    process.exit(0);
}