"use strict";
/* Question 1.Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout*/
Object.defineProperty(exports, "__esModule", { value: true });
function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    });
}
// Usage example
fetchGreeting().then((greeting) => {
    console.log(greeting); // This will log "Hello, World!" after 2 seconds
});
//////////////////
/* Question 2 Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}
// Call the function to see it in action
simulateTask();
//////////////////
/* Question # 3
Write a function fetchData that returns a Promise which resolves with the string
"Data fetched successfully!" after a delay of 1 second.*/
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
// Example usage:
fetchData().then((message) => {
    console.log(message); // Logs "Data fetched successfully!" after 1 second
});
/*  Question # 4
Write a function fetchWithError that returns a Promise. It should randomly either
resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
delay of 1 second. Handle the rejection using .catch */
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Randomly determine success or failure
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
// Example usage:
fetchWithError()
    .then((message) => {
    console.log(message); // Logs "Data fetched successfully!" if resolved
})
    .catch((error) => {
    console.error(error); // Logs "Data fetch failed!" if rejected
});
/* Question # 5
Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called */
// Function fetchData that returns a Promise which resolves after 1 second
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
// Function processData that returns a Promise which resolves after 1 second
function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data processed successfully!");
        }, 1000);
    });
}
// Function executeSequentially that executes fetchData and processData sequentially
function executeSequentially() {
    fetchData()
        .then((fetchResult) => {
        console.log(fetchResult); // Logs the result of fetchData
        return processData(); // Returns the promise from processData
    })
        .then((processResult) => {
        console.log(processResult); // Logs the result of processData
    })
        .catch((error) => {
        console.error(error); // Handle any errors that occur in the process
    });
}
// Example usage:
executeSequentially();
