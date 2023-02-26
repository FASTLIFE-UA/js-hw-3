const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let userPassword = prompt("Введіть свій пароль:");

if (userPassword === null) {
  message = "Операцію скасовано!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонено, невірний пароль!";
}

alert(message);