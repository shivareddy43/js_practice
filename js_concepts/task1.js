// function to download data from url
function fetechData(url, callback) {
  console.log("starting to download data from ", url);
  setTimeout(function exec() {
    console.log("Downloading completed");
    const data = "abc";
    callback(data);
  }, 1000);
}

fetechData("www.xyx.com", function print_data(data) {
  console.log(`Downloaded content is ${data}`);
});

// callback function to save that downloaded data in a file and return the filename
const fs = require("fs");

function write_cb(callback) {
  console.log("Starting writing...");
  setTimeout(function exec() {
    const data = "abc efg";
    callback("file1.txt", data, null);
  }, 5000);
}
write_cb(function write_data(filepath, data, err) {
  fs.writeFile(filepath, data, (err) => {
    if (err) {
      console.log("Error writing file ", err);
    } else {
      console.log(`Data written to ${filepath} successfully.`);
    }
  });
  console.log("Completed writing data");
});
// callback fucntion to upload the file written in previous step to a newurl
function upload(url, file, cb) {
  console.log("started uploading from ", file, " to url: ", url);
  setTimeout(function up() {
    console.log("Completed uploading data");
    const response = "SUCCESS";
    cb(response);
  }, 6000);
}

upload("www.xyz.com", "file1.txt", function upload_data(response) {
  console.log("Data upload status ", response);
});
