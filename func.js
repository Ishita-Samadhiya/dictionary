const yes = { 
    word: "yes",
    partOfSpeech: "noun",
    definitions: ["Used to give an affirmative response.",
    "Used as a response to someone addressing one or otherwise trying to attract one's attention."]
}
const pancea = {
    word: "pancea",
    partOfSpeech: "noun",
    definitions: ["An answer or solution for all problems or difficulties."]
}
const concatenation={
    word: "concatenation",
    partOfSpeech: "noun",
    definitions: ["A series of interconnected or interdependent things or events."]
}
const saw ={
    word: "saw",
    partOfSpeech: "verb",
    definitions:
    ["Cut (something) using a saw.",
    "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."]
}
const found ={
    word: "found",
    partOfSpeech: "adjective",
    definitions: 
    ["Having been discovered by chance or unexpectedly.",
    "(of a ship) Equipped; Supplied."]
}
const crane = {
    word: "crane",
    partOfSpeech: "verb",
    definitions: 
    ["Stretch out one's body or neck in order to see something.",
    "Move (a heavy object) with a crane."]
}
const minute = {
    word: "minute",
    partOfSpeech: "noun",
    definitions: 
    ["A period of time equal to sixty seconds or a sixtieth of an hour.",
    "A sixtieth of a degree of angular measurement (symbol: ')"]
}
const grotesque = {
    word: "grotesque",
    partOfSpeech: "adjective",
    definitions: ["Comically or repulsively ugly or distorted."]
}
const label = {
    word: "label",
    partOfSpeech: "noun",
    definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
}
const debacle = {
    word: "debacle",
    partOfSpeech: "noun",
    definitions: ["A sudden and ignominious failure; a fiasco."]
}

var dict = [yes, pancea, concatenation, saw, found, crane, minute, grotesque, label, debacle];
var inp = document.getElementById("inp");
var sub = document.getElementById("sub");
var output = document.getElementById("output"); // Add an output element for displaying results

sub.addEventListener('click', dictionary);

function dictionary() {
    var p = document.createElement("p");
    var foundWord = false;

    dict.forEach((obj) => {
        if (obj.word === inp.value.toLowerCase()) {
            var str = "Part Of Speech: " + obj.partOfSpeech;

            if (obj.definitions.length > 1) {
                str += "\n1. " + obj.definitions[0];
                str += "\n2. " + obj.definitions[1];
            } else {
                str += "\n1. " + obj.definitions[0];
            }

            p.innerText = str;
            foundWord = true;
        }
    });

    if (!foundWord) {
        p.innerText = "Not available in the dictionary!";
    }

    output.innerHTML = ""; // Clear the existing content
    output.appendChild(p);
}

