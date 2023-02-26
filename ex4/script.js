const credits = 23580;
const pricePerDroid = 3000;

let message;

let write = prompt("Виберіть кількість товару:");

if (write === null) {
  message = "Операцію скасовано!";
} else if (credits >= pricePerDroid * write) {
  message = `Ви купили ${write} телевізорів, на рахунку залишилось ${
    credits - write * pricePerDroid
  } кредитів.`;
} else {
  message = `Недостатньо коштів на рахунку!`;
}

alert(message);
