const fs = require("fs");

// callback approach
// function callback(err, data) {
//   if (err) {
//     console.log("no such file");
//   } else {
//     console.log(data);
//   }
// }

// fs.readFile("a.txt", "utf-8", callback);

function readFilePromisified(filePath, lang) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, lang, (err, data) => {
      if (err) {
        reject(err.message);
        return;
      }
      resolve(data);
    });
  });
}

readFilePromisified("aa.txt", "utf-8").then(console.log).catch(console.error);
