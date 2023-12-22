const form = document.querySelector(".form"),
  tableSection = document.querySelector(".section__table");

// Обработчик события отправки формы
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstname"),
    lastName = document.querySelector("#lastname"),
    birthYear = document.querySelector("#date"),
    city = document.querySelector("#city"),
    orderInfo = document.querySelector(".textarea"),
    receiveAds = document.querySelectorAll(".form__checkboxes input")[0],
    shareData = document.querySelectorAll(".form__checkboxes input")[1];

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    birthYear: birthYear.value,
    city: city.value,
    orderInfo: orderInfo.value,
    receiveAds: receiveAds.checked,
    shareData: shareData.checked,
  };

  const storedData = JSON.parse(localStorage.getItem("formDataArray")) || [];

  storedData.push(formData);

  localStorage.setItem("formDataArray", JSON.stringify(storedData));

  updateTable(storedData);
});

// Обработчик события очистки формы
form.addEventListener("reset", function () {
  localStorage.removeItem("formDataArray");

  tableSection.innerHTML = "";
});

// Функция для создания и обновления таблицы
function updateTable(dataArray) {
  tableSection.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("table");

  const tableHeader = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = [
    "Имя",
    "Фамилия",
    "Год рождения",
    "Город",
    "Информация о заказе",
    "Рассылка",
    "Разглашение данных",
  ];

  headers.forEach((header) => {
    const th = document.createElement("th");

    th.textContent = header;
    headerRow.appendChild(th);
  });

  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);

  const tableBody = document.createElement("tbody");
  table.classList.add("tbody");

  dataArray.forEach((data) => {
    const row = document.createElement("tr");

    Object.values(data).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      row.appendChild(td);
    });
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);

  tableSection.appendChild(table);
}
