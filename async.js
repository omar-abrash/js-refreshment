// Function with asynchronous behavior using setTimeout

// 1. Example demonstrating how JavaScript handles asynchronous actions with setTimeout

// Function to log "mid line!!" after 3 seconds
const printMidLine = () => {
  setTimeout(() => {
    console.log("mid line!!");
  }, 3000);
};

console.log("first line");
printMidLine();
console.log("last line");

// 2. Asynchronous function using Promise

// Function that resolves or rejects a Promise based on a condition
const printMidLineAsync = async (condition) => {
  return new Promise((resolve, reject) => {
    if (condition === "ok") {
      // Resolving the Promise after 3 seconds
      setTimeout(() => {
        console.log("mid line");
        resolve();
      }, 3000);
    } else {
      // Rejecting the Promise immediately if condition is not "ok"
      reject(new Error("not ok"));
    }
  });
};

console.log("first line");
printMidLineAsync("ok")
  .then(() => console.log("last line")) // Logging "last line" after the Promise resolves
  .catch((error) => console.error(error.message)); // Handling any errors if the Promise rejects
