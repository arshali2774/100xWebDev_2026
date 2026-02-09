function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log("1: Log Start");
setTimeout(() => console.log("2: Macro task log set timeout"), 0);
Promise.resolve().then(() => console.log("3. Micro task log promise"));
setTimeoutPromisified(0).then(() => console.log("Promisifed setTimeout"));
console.log("4: Log End");
