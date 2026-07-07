const words = [
    "IT & Networking Professional",
    "Network Engineer",
    "Technical Support Engineer",
    "Cybersecurity Enthusiast"
];

let word=0;
let letter=0;
let reverse=false;

const typing=document.getElementById("typing");

function type(){

if(!typing) return;

typing.textContent=words[word].substring(0,letter);

if(!reverse){

letter++;

if(letter>words[word].length){

reverse=true;

setTimeout(type,1500);

return;

}

}else{

letter--;

if(letter===0){

reverse=false;

word++;

if(word===words.length){

word=0;

}

}

}

setTimeout(type,reverse?40:100);

}

type();