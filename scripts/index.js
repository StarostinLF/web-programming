const warning = document.querySelectorAll("#warning"),
  football = document.querySelector("#football"),
  news = document.querySelector("#news"),
  form = document.querySelector("#form"),
  yandex = document.querySelector("#yandex"),
  cards = document.querySelector("#cards"),
  experts = document.querySelector("#experts"),
  itBlog = document.querySelector("#itBlog"),
  itSpec = document.querySelector("#itSpec"),
  layout = document.querySelector("#layout"),
  javaScript = document.querySelector("#js");

warning.forEach(function (warning) {
  warning.addEventListener("click", function () {
    const page = document.querySelector("script");

    page.insertAdjacentHTML(
      "beforebegin",
      `
        <dialog class="dialog" id="dialog-id">
          <p>Это задание пока не выполнено.</p>
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

football.addEventListener("click", () => {
  location.href = "html/football.html";
});

news.addEventListener("click", () => {
  location.href = "html/news.html";
});

form.addEventListener("click", () => {
  location.href = "html/form.html";
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

itBlog.addEventListener("click", () => {
  location.href = "html/itBlog.html";
});

itSpec.addEventListener("click", () => {
  location.href = "html/itSpec.html";
});

/*layout.addEventListener("click", () => {
  location.href = "html/layout.html";
});*/

javaScript.addEventListener("click", () => {
  location.href = "html/javascript.html";
});
