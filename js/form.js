const overlay = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");
const checkbox = document.getElementById("agree");
const submitBtn = document.getElementById("submitOrder");
const timeField = document.getElementById("timeField");

openBtn.addEventListener("click", function () {
  overlay.style.display = "flex";
  document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  document.body.classList.remove("modal-open");
});

function checkForm() {
  const nameValue = nameField.value.trim();
  const phoneValue = phoneField.value.trim();
  const isChecked = checkbox.checked;
  const phoneIsValid = /^\+7[0-9]{10}$/.test(phoneValue);
  submitBtn.disabled = !(nameValue !== "" && phoneIsValid && isChecked);
}

phoneField.addEventListener("focus", function () {
  if (phoneField.value.trim() === "") phoneField.value = "+7";
});

phoneField.addEventListener("input", function () {
  if (!phoneField.value.startsWith("+7")) phoneField.value = "+7";
  checkForm();
});

nameField.addEventListener("input", checkForm);
checkbox.addEventListener("change", checkForm);

submitBtn.addEventListener("click", function () {
  alert("Форма отправлена!");
  overlay.style.display = "none";
  document.body.classList.remove("modal-open");
});

const cardButtons = document.querySelectorAll(".openModalFromCard");

cardButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "flex";
    document.body.classList.add("modal-open");
  });
});

timeField.addEventListener("focus", function () {
  if (timeField.value.trim() === "") {
    timeField.value = "08:00";
  }
});

timeField.addEventListener("input", function () {
  let val = timeField.value;
  if (val.length >= 3 && val[2] !== ":") {
    val = val.replace(/:/g, "");
    val = val.slice(0, 2) + ":" + val.slice(2);
  }
  if (val.length > 5) val = val.slice(0, 5);
  timeField.value = val;
});
