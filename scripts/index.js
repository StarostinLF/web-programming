const warning = document.querySelectorAll("#warning"),
  task5 = document.querySelector("#task5"),
  task6 = document.querySelector("#task6"),
  form = document.querySelector("#form"),
  yandex = document.querySelector("#yandex"),
  cards = document.querySelector("#cards"),
  experts = document.querySelector("#experts"),
  task7 = document.querySelector("#task7"),
  task8 = document.querySelector("#task8"),
  task9 = document.querySelector("#task9"),
  task10 = document.querySelector("#task10"),
  javascript = document.querySelector("#javascript");

warning.forEach(function (warning) {
  warning.addEventListener("click", function () {
    let page = document.querySelector("script");

    page.insertAdjacentHTML(
      "beforebegin",
      `
        <dialog class="dialog" id="dialog-id">
          <p>Это задание пока не готово. Посмотрите его чуть позднее.</p>
          <button
              class="button"
              type="submit"
              onclick="closeDialog()"
              aria-controls="dialog-id"
            >
              Закрыть
          </button>
        </dialog>
      `
    );
    document.querySelector(".dialog").showModal();
  });
});

function closeDialog() {
  window["dialog-id"].close();
  document.querySelector(".dialog").remove();
}

task5.addEventListener("click", () => {
  location.href = "html/task5.html";
});

task6.addEventListener("click", () => {
  location.href = "html/task6.html";
});

/*yandex.addEventListener("click", () => {
  location.href = "html/yandex.html";
});*/

cards.addEventListener("click", () => {
  location.href = "html/cards.html";
});

experts.addEventListener("click", () => {
  location.href = "html/experts.html";
});

task7.addEventListener("click", () => {
  location.href = "html/task7.html";
});

task8.addEventListener("click", () => {
  location.href = "html/task8.html";
});

task9.addEventListener("click", () => {
  location.href = "html/task9.html";
});