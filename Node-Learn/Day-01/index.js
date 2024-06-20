const fs = require("fs");

// file created with data

// fs.writeFile("hello.txt1", "ye mere 2nd  file he", function (err) {
//   if (err) console.log(err);
//   else console.log("Done");
// });

//  existing files me data append krna

// fs.appendFile(
//   "hello.txt1",
//   "esi file me kuch appind kr rahe he ",
//   function (err) {
//     if (err) console.log(err);
//     else console.log("Done");
//   }
// );

//  file name change

// fs.rename("hello.txt1", "fileNameChange", function (err) {
//   if (err) console.log(err);
//   else console.log("Done");

//  file copy

// fs.copyFile("hello.txt", "./copyFile/copy.txt", function (err) {
//   if (err) console.log(err);
//   else console.log("done");
// });

//  file deleted

// fs.unlink("hello.txt", function (err) {
//   if (err) console.log(err);
//   else console.log("done");
// });

//*****************************************

//  ****************HTTP****************

const http = require("http");
const server = http.createServer(function (req, res) {
  res.end("hello world");
});
// http://localhost:3000/ server are creted
server.listen(3000);

//  npm : node packege manager
