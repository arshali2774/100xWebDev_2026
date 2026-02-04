/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const totalsByCategory = {};
  transactions.forEach((item) => {
    if (!totalsByCategory[item.category]) {
      totalsByCategory[item.category] = 0;
    }
    totalsByCategory[item.category] += item.price;
  });

  return Object.keys(totalsByCategory).map((category) => ({
    category,
    totalSpent: totalsByCategory[category],
  }));
}
console.log(
  calculateTotalSpentByCategory([
    {
      itemName: "ccc",
      category: "xxx",
      price: 100,
      timestamp: "1123123",
    },
  ]),
);
module.exports = calculateTotalSpentByCategory;
