var topics = "HTML, CSS, GIT, JavaScript";

console.log(topics);
/*
var topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/
var Topic = ["HTML", "CSS", "Git", "JavaScript"];

for(var x = 0; x < Topic.length; x++){
    console.log("Let's study " + Topic[x]);
}