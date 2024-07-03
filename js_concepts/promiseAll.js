function download(url, time) {
  return new Promise(function exec(res, rej) {
    console.log("strating to download data from ", url);
    setTimeout(function down() {
      console.log("Download completed");
      const content = "ABCDEF";
      res(content);
    }, time);
  });
}

const p1 = download("www.aaaa.com", 5000);
const p2 = download("www.bbbb.com", 3000);
const p3 = download("www.cccc.com", 4000);
Promise.all([p1, p2, p3]).then(function fulfillHandler(values) {
  console.log(values);
}); // promise is fullfilled when all promises is settled
