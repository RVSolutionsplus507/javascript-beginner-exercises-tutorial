let total = prompt('How many km are left to go?');

// Your code below:
// If there are more than 100 km left to go, we answer: "We still have a bit of driving left to go".

// If there are more than 50 km, but less or equal to 100 km, we answer: "We'll be there in 5 minutes".

// If there are less than or equal to 50 km, we answer: "I'm parking. I'll see you right now".
if (total <= 50) {
    console.log("I'm parking. I'll see you right now")
} else if (total > 50 && total <= 100) {
    console.log("We'll be there in 5 minutes")
}else {
    console.log("We still have a bit of driving left to go")
}
    
