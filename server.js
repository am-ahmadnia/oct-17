// const express = require("express");
// const app = express();

// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const http = require("http");

const hostname = "0.0.0.0";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Sysmon App is Up and Running!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
