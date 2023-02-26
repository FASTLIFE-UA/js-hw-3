let total = 130;
const ordered = prompt("Кількість замовленого товару?");

if (total > ordered) {
  total -= ordered;
  alert(`Замовлення оформлено!`);
} else {
  alert(`На складі недостатня кількість товару!`);
}
