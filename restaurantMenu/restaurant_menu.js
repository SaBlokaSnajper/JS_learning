const breakfastMenu = [
  "Pancakes- $12",
  "Eggs Benedict -$22.99",
  "Oatmeal -$21.99",
  "Frittata -$15",
];
const mainCourseMenu = [
  "Steak- $86",
  "Pasta- $45.50",
  "Burger- $33.33",
  "Salmon- $65.99",
];
const dessertMenu = [
  "Cake- $15",
  "Ice Cream- $4.99",
  "Pudding- $6.50",
  "Fruit Salad- $12.99",
];

const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>item ${index + 1}: ${item}</p>`)
  .join("");
document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

let mainCourseItem = "";
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>item ${index + 1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = "";
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;
