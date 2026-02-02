const roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
const checkRole = "admin";
const action = "write";

const output = roles[checkRole].includes(action);
console.log(output);
