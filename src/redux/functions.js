import { Map, List } from 'immutable';

export const questions = {
    'git': [{id: 1, text: 'what is the command to switch to gh-pages', shown: false, team: null, value: 100},
        {id: 2, text: 'what is the commit to create a new branch called pigLatin', shown: false, team: null, value: 200},
        {id: 3, text: 'what is the command to switch to the previous branch', shown: false, team: null, value: 200},
        {id: 4, text: 'what is the command to delete a branch named oops', shown: false, team: null, value: 300},
        {id: 5, text: 'what is the command sequence to push a changed file ticTacToe.js', shown: false, team: null, value: 300},
        {id: 6, text: 'what are the commands to undo the last commit, checkout an unwanted change on test.js, add the remaining files, make a new commit and push', shown: false, team: null, value: 500},
    ],
    'objects':[
        {id: 7, text: 'how would you access the body property?', shown: false, team: null, value: 100},
        {id: 8, text: 'how would you change the title property value to "dolphins"', shown: false, team: null, value: 100},
        {id: 9, text: `add a new property to exampleObj called date with today's date`, shown: false, team: null, value: 200},
        {id: 10, text: `how would you access the type_id property?`, shown: false, team: null, value: 200},
        {id: 11, text: `how would you create  an array with all of the keys in exampleObj?`, shown: false, team: null, value: 300},
        {id: 12, text: `how would you delete the name key from exampleObj?`, shown: false, team: null, value: 400},
    ],
    'arrays': [
        {id: 13, text: 'how would you access the third item in example arr', shown: false, team: null, value: 100},
        {id: 14, text: `how would you set the 4th item in example Arr to be 'nathan'`, shown: false, team: null, value: 100},
        {id: 15, text: `how would you remove the last item of exampleArr and save it to a variable named deletedName?`, shown: false, team: null, value: 200},
        {id: 16, text: `how would you add the name 'Molly' to example array `, shown: false, team: null, value: 200},
        {id: 17, text: `name 2 immutable array methods`, shown: false, team: null, value: 300},
        {id: 18, text: `name 2 mutable array methods`, shown: false, team: null, value: 300},
        {id: 19, text: `loop through exampleArr and console log each of the names`, shown: false, team: null, value: 300},
        {id: 20, text: `loop through the authorizedUsers array and console log the user name `, shown: false, team: null, value: 400},
    ],
    'functions & conditionals': [
        {id: 21, text: 'write a one line function called sumOfTwo numbers that takes two arguments and returns the sum', shown: false, team: null, value: 200},
        {id: 22, text: 'write a one line function that determines if two arguments evaluate to true', shown: false, team: null, value: 200},
        {id: 23, text: 'write a function that accepts a string and returns whether or not there are vowels in the string', shown: false, team: null, value: 300},
        {id: 24, text: 'write a function that accepts a string and returns whether or not there are vowels in the string', shown: false, team: null, value: 400},
        {id: 25, text: 'write a function that takes in an object, loops through every key/value pair and console.logs both the key & value', shown: false, team: null, value: 500},
        {id: 26, text: `write a function that accepts a number and if there is a decimal point, returns the number with the decimal point one space to the left. If there's not, then adds .00 to the end`, shown: false, team: null, value: 600},
    ],
};