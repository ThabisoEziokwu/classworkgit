// Initialize an empty array to store werewolf events
let werewolfLog = [];

// Function to prompt the user for an event and add it to the log
function recordEvent() {
    let event = prompt("Enter a werewolf event (or type 'exit' to stop recording):");
    if (event && event.toLowerCase() !== 'exit') {
        werewolfLog.push(event);
        recordEvent(); // Recursively call the function to continue recording events
    }
}

recordEvent();

// Analyze the log for patterns or triggers (you can add your analysis logic here)
console.log("Werewolf log analysis:");
console.log("Total events recorded: " + werewolfLog.length);
console.log("Events logged: ");
werewolfLog.forEach((event, index) => {
    console.log(`${index + 1}. ${event}`);
});

