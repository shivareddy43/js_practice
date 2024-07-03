function download(url) {
  return new Promise(function exec(res, rej) {
    console.log("strating to download data from ", url);
    setTimeout(function down() {
      console.log("Download completed");
      const content = "ABCDEF";
      rej(content);
    });
  });
}
async function steps() {
  try {
    console.log("strating steps");
    const downloadData = await download("www.xyz.com");
    return downloadData;
  } catch (error) {
    console.log("we have an error ", error);
  } finally {
    // finally donot take any parameters
    console.log("finally executed");
  }
}
steps();
