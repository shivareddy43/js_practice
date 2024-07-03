function downloadData(url) {
  return new Promise(function download(res, rej) {
    console.log("Downloading the data from url: ", url);
    setTimeout(function cb() {
      //console.log("Download completed");
      data = "abcdef";
      console.log("Data is ", data);
      res(data);
    }, 1000);
  });
}
function writeData(filepath, data) {
  return new Promise(function write(res, rej) {
    console.log("writing the data: ", data, "to file: ", filepath);
    setTimeout(function cb() {
      //   console.log("writing completed");
      res(filepath);
    }, 500);
  });
}
function uploadData(url, filepath) {
  return new Promise(function (res, rej) {
    console.log("uploading the data from ", filepath, " to url ", url);
    setTimeout(function cb() {
      //console.log("uploading completed");
      res(filepath);
    }, 800);
  });
}

// downloadData("www.xyz.com")
//   .then((data) => writeData("file.txt", data))
//   .then((filepath) => uploadData("www.xyz.com", filepath))
//   .then((result) => {
//     console.log("All operations completed successfully");
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });
downloadData("www.xyz.com")
  .then(function processDownload(value) {
    console.log("Download completed");
    return writeData("file.txt", value);
  })
  .then(function processWrite(value) {
    console.log("writing completed");
    return uploadData("www.xyz.com", value);
  })
  .then(function processUpload(value) {
    console.log("uploading completed : ", value);
  });
