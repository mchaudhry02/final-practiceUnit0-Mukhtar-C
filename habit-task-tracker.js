// ===========================================
// Dream App: Habit & Task Tracker
// ===========================================

// 1. Values, Data Types, and Operations
// -------------------------------------------
// Pseudocode:
// - Store how many tasks are completed
// - Do a calculation to find percentage of progress
let totalTasks = 5;        // number (data type: Number)
let completedTasks = 3;    // number
let progress = (completedTasks / totalTasks) * 100;  // operation
console.log("Progress: " + progress + "%"); // test output


// 2. Stringing Characters Together
// -------------------------------------------
// Pseudocode:
// - Combine strings and variables to create a motivational message
let userName = "Alex"; // data type: String
let message = "Great job, " + userName + "! You finished " + completedTasks + " tasks today!";
console.log(message);


// 3. Control Structures and Logic
// -------------------------------------------
// Pseudocode:
// - If user has completed all tasks, show a success message
// - Else show encouragement
if (completedTasks === totalTasks) {
  console.log("🎉 You completed everything! Amazing!");
} else {
  console.log("Keep going—you can finish the rest!");
}


// 4. Building Arrays
// -------------------------------------------
// Pseudocode:
// - Create an array to hold the user’s tasks
let tasks = ["Read 10 pages", "Do 20 pushups", "Write journal", "Meditate", "Study JavaScript"];
console.log("My tasks: ", tasks);


// 5. Using Arrays
// -------------------------------------------
// Pseudocode:
// - Loop through the tasks array and display each task
for (let i = 0; i < tasks.length; i++) {
  console.log("Task " + (i + 1) + ": " + tasks[i]);
}


// 6. Creating and Using Objects
// -------------------------------------------
// Pseudocode:
// - Represent each task as an object with a title and completion status
let task1 = {
  title: "Read 10 pages",
  isComplete: false
};

let task2 = {
  title: "Do 20 pushups",
  isComplete: true
};

console.log(task1.title + " completed? " + task1.isComplete);
console.log(task2.title + " completed? " + task2.isComplete);


