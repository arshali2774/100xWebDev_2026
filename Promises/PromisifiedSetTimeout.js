// Raw logic

// function setTimeoutPromisified(ms) {
//   return new Promise((resolve, reject) => {
//     if (ms < 0) {
//       reject();
//     } else {
//       setTimeout(resolve, ms);
//     }
//   });
// }
// function callback() {
//   console.log("Hi there");
// }
// function callbackReject(ms) {
//   console.log("No negative value allowed");
//   console.log("You entered negative value: " + ms);
// }
// let timems = -1000;
// setTimeoutPromisified(timems)
//   .then(callback)
//   .catch(() => callbackReject(timems));

//better way to write above logic
function setTimeoutPromisified(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error(`Invalid Time delay: ${ms}`));
    } else {
      setTimeout(resolve, ms);
    }
  });
}
function success() {
  console.log("Hi there");
}
function failure(err) {
  console.error(err);
}
setTimeoutPromisified(-1000).then(success).catch(failure);

// we can also write the above logic like this
function setTimeoutPromisified2(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error(`Invalid Time delay: ${ms}`));
    } else {
      setTimeout(() => resolve("Hello"), ms);
    }
  });
}
setTimeoutPromisified2(5000).then(console.log).catch(console.error);

// setTimeout(callback, 1000);
// we take the callback function and pass it to setTimeout in promise through resolve.
