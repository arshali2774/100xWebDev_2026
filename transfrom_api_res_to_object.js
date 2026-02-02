const input =[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
] 

const output = input.reduce((a,b)=>{
  a[b.id] = b.name;
  return a;
},{})

console.log(output)
