const warning = document.querySelectorAll("#warning");

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