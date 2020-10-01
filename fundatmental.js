// These are primative variables

// String
var name = "Adrien";

// Number / Integer
var num = 10;

// Boolean
var isPlaying = false;

// Arrays
var banana = [1,2,3,4,5,6];
console.log(banana.length);
console.log(banana[banana.length - 1]);
squares(banana);


// Objects
// Objects have key value pairs
var ninja = { "name":"Nichole","dojo":"Arlington" };
var ninja2 = {  "name": "Adrien","dojo":"Chicago"};
console.log(ninja.name);

// Loops
// For Loop
// i = i + 1
for(var i = 0; i < banana.length;i++){
    console.log("For Loop",banana[i]);
}

// While Loop
var x = 0;

while(x < banana.length){
    console.log("While loop",banana[x])
    x++
}

// Contionals
for(var n = 0; n < banana.length;n++){
    if(banana[n] > 5){
        console.log("That's great!");
    }
    else if(banana[n] === 3){
        console.log("WOAH!!!")
    }
    else{
        console.log("Keep Going");
    }
}

function squares(arr){
    var output = [];
    for(var i = 0; i < arr.length; i++){
        output.push(arr[i] * arr[i]);
    }
    console.log(output);

}