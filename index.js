const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flatMapDeep(items);
console.log(newItems);
console.log("test");

const { readFile } = require("fs");
console.log("start the first task");
readFile("./content/text.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
  console.log("first task completed");
});
console.log("start next task");

console.log("first");
setTimeout(() => {
  console.log("third");
}, 1);
console.log("second");

// console.log("start the task");
// setInterval(() => {
//   console.log("in task");

// }, 2000);
// console.log("finish the task");

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("hello node");
  res.end("hello node");
});

server.listen(5000, () => {
  console.log("server listening on 5000");
});
