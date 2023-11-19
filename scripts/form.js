const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  alert("Форма отправлена!");
});
