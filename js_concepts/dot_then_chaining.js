// Example functions simulating asynchronous operations

// Function to fetch data from an API (simulated with setTimeout)
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe", age: 30 };
      resolve(data); // Simulating successful API response
      // Uncomment the following line to simulate an error
      // reject(new Error("Failed to fetch data from API"));
    }, 1000); // Simulating network delay
  });
}

// Function to process the fetched data
function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.salary = 50000; // Modify data (simulated processing)
      resolve(data); // Return processed data
      // Uncomment the following line to simulate an error
      // reject(new Error("Failed to process data"));
    }, 500); // Simulating processing time
  });
}

// Function to save processed data (simulated with setTimeout)
function saveProcessedData(processedData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Processed data saved successfully:", processedData);
      resolve(); // Simulating successful save
      // Uncomment the following line to simulate an error
      // reject(new Error("Failed to save processed data"));
    }, 800); // Simulating save operation time
  });
}

// Example of .then chaining
fetchDataFromAPI()
  .then(processData) // Chain to process the fetched data
  .then(saveProcessedData) // Chain to save the processed data
  .then(() => {
    console.log("All tasks completed successfully!");
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
