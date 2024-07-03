function download(url) {
  return new Promise(function exec(res, rej) {
    console.log("strating to download data from ", url);
    setTimeout(function down() {
      console.log("Download completed");
      const content = "ABCDEF";
      res(content);
    });
  });
}
function writeFile(data) {
  return new Promise(function exec(res, rej) {
    console.log("started writing data into file ", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const filename = "file.txt";
      res(filename);
    }, 5000);
  });
}
function uploadData(file, url) {
  return new Promise(function exec(res, rej) {
    console.log("started uploading data into file ", file, "to url ", url);
    setTimeout(function upload() {
      console.log("Completed uploading the data in url");
      const response = "SUCCESS";
      res(response);
    }, 2000);
  });
}
download("www.xyz.com")
  .then(function processDownload(value) {
    console.log("downloading done with following value ", value);
    return writeFile(value);
  })
  .then(function processWrite(value) {
    console.log("data written in the file name ", value);
    return uploadData(value, "www.xyz.com");
  })
  .then(function processUpload(value) {
    console.log("we have uploaded with ", value);
  })
  .catch(function f(error) {
    console.log("catching error ", error);
  })
  .finally(function final() {
    console.log("Executing finally");
  });
