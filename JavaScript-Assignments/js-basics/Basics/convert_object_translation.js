const input = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" },
};

const entries = Object.entries(input).reduce((acc, [lang, translations]) => {
  // translations = { hello: "Hello", bye: "Goodbye" }
  Object.entries(translations).forEach(([word, translation]) => {
    // word = "hello", translation = "Hello"
    if (!acc[word]) acc[word] = {}; // Create word key if doesn't exist
    acc[word][lang] = translation; // acc.hello.en = "Hello"
  });
  return acc;
}, {});

console.log(entries);

const a = {
  userA: {
    name: "arsh",
    gender: "male",
  },
  userB: "no info",
};

console.log(a["userA"]["name"]);
console.log(a["userB"]);
console.log(a["userB"]["name"]);
