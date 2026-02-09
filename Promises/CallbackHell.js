// example of callback hell
// setTimeout(() => {
//   console.log("Print after 1 second");
//   setTimeout(() => {
//     console.log("Print after 3 second");
//     setTimeout(() => {
//       console.log("Print after 5 second");
//     }, 5000);
//   }, 3000);
// }, 1000);

// another example

function step3() {
  console.log("jhejejeje");
}

function step2() {
  console.log("hekkk");
  setTimeout(step3, 5000);
}

function step1() {
  console.log("hi");
  setTimeout(step2, 3000);
}
setTimeout(step1, 1000);

//solution use promise chaining

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000)
  .then(() => {
    console.log("hiiiiiiii");
    return setTimeoutPromisified(3000);
  })
  .then(() => {
    console.log("jdahjdhjkadhkjadhjk");
    return setTimeoutPromisified(5000);
  })
  .then(() => console.log("asjhfajkldakljdakld"));
