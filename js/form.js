document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("modalOverlay");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const nameField = document.getElementById("name");
  const phoneField = document.getElementById("phone");
  const checkbox = document.getElementById("agree");
  const submitBtn = document.getElementById("submitOrder");


  openBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
    document.body.classList.add("modal-open");
  });

  
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.classList.remove("modal-open");
  });

 
  function checkForm() {
    const nameValue = nameField.value.trim();
    const phoneValue = phoneField.value.trim();
    const isChecked = checkbox.checked;

    submitBtn.disabled = !(nameValue !== "" && phoneValue !== "" && isChecked);
  }

  nameField.addEventListener("input", checkForm);
  phoneField.addEventListener("input", checkForm);
  checkbox.addEventListener("change", checkForm);

  submitBtn.addEventListener("click", () => {
    alert("Форма отправлена!");
    overlay.style.display = "none";
    document.body.classList.remove("modal-open");
  });
});
