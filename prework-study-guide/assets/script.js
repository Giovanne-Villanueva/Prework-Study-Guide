var Topic = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = Topic[Math.floor(Math.random() * Topic.length)];

function listTopics(){
    //code Block
    for(var x = 0; x < Topic.length; x++){
        console.log(Topic[x]);
    }
    
}

function selectTopics(){

    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopics();
