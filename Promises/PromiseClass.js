class Promise2 {
  constructor(fn) {
    this.successCallback = null;
    this.failureCallback = null;
    this.state = "pending";
    this.value = undefined;
    const resolve = (val) => {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.value = val;
      if (this.successCallback) this.successCallback(val);
    };
    const reject = (err) => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.value = err;
      if (this.failureCallback) rhis.failureCallback(err);
    };
    fn(resolve, reject);
  }
  then(s) {
    this.successCallback = s;
    // If it already resolved earlier, run immediately
    if (this.state === "fulfilled") {
      this.successCallback(this.value);
    }

    return this; // optional, lets you chain .catch()
  }
  catch(e) {
    this.failureCallback = e;
    this.failureCallback = e;

    // If it already rejected earlier, run immediately
    if (this.state === "rejected") {
      this.failureCallback(this.value);
    }

    return this;
  }
}

function setTimeoutPromisified(ms) {
  return new Promise2((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("Invalid ms"));
      return;
    }
    setTimeout(resolve, ms);
  });
}

setTimeoutPromisified(-1000)
  .then(() => console.log("hellow"))
  .catch(console.error);
