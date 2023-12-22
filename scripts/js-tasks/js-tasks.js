const jsSection = document.querySelector(".section"),
  promptUsername = jsSection.querySelector("#enterUsername"),
  trianglePerimeter = jsSection.querySelector("#calculateTrianglePerimeter"),
  searchNuber = jsSection.querySelector("#searchMaxNuber"),
  validTriangle = jsSection.querySelector("#validateTriangle"),
  checkRange = jsSection.querySelector("#checkAgeRange"),
  breakKunc = jsSection.querySelector("#checkBreak"),
  callbackFunc = jsSection.querySelector("#returnCallback"),
  geometricFigure = jsSection.querySelector("#CheckGeometrinFigure"),
  avgStudentsPoint = jsSection.querySelector("#avgStudentsPoint");

/* Promt и username */
function enterUsername() {
  let myName = prompt("Enter your name: ");
  alert(`Hello, ${myName}! Welcome to JavaScript!`);
}

/* Периметр треугольника */
function calculateTrianglePerimeter() {
  let a = Number(prompt("Enter a: ")),
    b = Number(prompt("Enter b: ")),
    c = Number(prompt("Enter c: "));

  function calcTrianglePerimeter(s1, s2, s3) {
    return s1 + s2 + s3;
  }
  console.log(`Периметр треугольника = ${calcTrianglePerimeter(a, b, c)}.`);
}

/* Поиск максимума из чисел */
function searchMaxNuber() {
  function findMaxNumber(...args) {
    return Math.max(...args);
  }
  console.log(`Максимальное число: ${findMaxNumber(5, 10, 15, 20)}.`);
}

/* Проверка построения треугольника */
function validateTriangle() {
  function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
  }
  if (isTriangle(3, 4, 5)) console.log("Можно построить треугольник.");
  else console.log("Нельзя построить треугольник.");
}

/* Работа с диапазоном */
function checkAgeRange() {
  let start = parseInt(prompt("Введите начальное число диапазона: ")),
    end = parseInt(prompt("Введите конечное число диапазона: ")),
    ageArray = [];

  if (isNaN(start) || isNaN(end)) {
    console.log("Пожалуйста, введите числа.");
    return;
  }

  if (start > end) {
    console.log("Начальное число не может быть больше конечного.");
    return;
  }

  for (age = start; age <= end; age++) {
    ageArray.push(age);
  }
  console.log(`Цикл for: ${ageArray.join(", ")}`);

  ageArray = [];
  age = start;
  while (age <= end) {
    ageArray.push(age);
    age++;
  }
  console.log(`Цикл while: ${ageArray.join(", ")}`);

  ageArray = [];
  age = start;
  do {
    ageArray.push(age);
    age++;
  } while (age <= end);
  console.log(`Цикл do ... while: ${ageArray.join(", ")}`);

  ageArray = [];
  for (let i = end; i >= start; i--) {
    ageArray.push(i);
  }
  console.log(`Числа от большего к меньшему: ${ageArray.join(", ")}`);
}

/* Break */
function checkBreak() {
  let sum = 0,
    count = 0;

  while (true) {
    let input = prompt("Введите число: "),
      number = parseInt(input);

    if (input === null || isNaN(input)) {
      alert("Введите корректное число.");
      continue;
    }

    if (number < 0) break;

    count++;
    sum += number;
  }
  console.log(`Количество введенных чисел: ${count}`);
  console.log(`Сумма введенных чисел: ${sum}`);
}

/* Коллбэк-функция */
function returnCallback() {
  let timeNow = parseInt(prompt("Введите время: "));

  function helloFunction(timeNow, morning, night) {
    if (timeNow >= 6 && timeNow <= 11) {
      morning();
    } else if (timeNow > 11 && timeNow < 18) {
      console.log("Добрый день!");
    } else night();
  }

  helloFunction(
    timeNow,
    () => console.log("Доброе утро!"),
    () => console.log("Доброй ночи!")
  );
}

/* Геометрические фигуры */
function checkGeometricFigure() {
  let shapeType = prompt(
      "Введите тип геометрической фигуры (круг или квадрат):"
    ).toLowerCase(),
    sideLength = parseInt(prompt("Введите длину (радиус или сторона):"));

  function myCalculate(shape, length, circleAreaFunction, squareAreaFunction) {
    let area;

    if (shape === "круг") {
      area = circleAreaFunction(length);
    } else if (shape === "квадрат") {
      area = squareAreaFunction(length);
    } else {
      console.log("Неподдерживаемый тип фигуры.");
      return;
    }

    console.log(`Площадь ${shape}а с длиной ${length}: ${area}`);
  }

  myCalculate(
    shapeType,
    sideLength,
    (radius) => Math.PI * radius * radius,
    (side) => side * side
  );
}

/* Рассчет средней оценки студентов из массива по предметам */
function calcAvgStudentsPoint() {
  function Student(name, subject, point) {
    this.name = name;
    this.subject = subject;
    this.point = point;
  }

  const students = [
    new Student("Иван", "Математика", 4),
    new Student("Мария", "Физика", 3),
    new Student("Алексей", "Информатика", 5),
    new Student("Екатерина", "Химия", 4),
    new Student("Андрей", "Математика", 3),
    new Student("Ольга", "Физика", 5),
    new Student("Николай", "Информатика", 4),
    new Student("Татьяна", "Химия", 5),
    new Student("Сергей", "Математика", 3),
    new Student("Анна", "Физика", 5),
  ];

  console.log(`Вот массив студентов для проверки:`, students);

  function calcAvgPoint(subject) {
    const points = students
      .filter((student) => student.subject === subject)
      .map((student) => student.point);

    if (points.length === 0) return "Нет данных об оценках для предмета";

    const avg = points.reduce((summ, point) => summ + point, 0) / points.length;

    return avg.toFixed(2);
  }

  console.log(
    `Средняя оценка студентов по:
  Математике: ${calcAvgPoint("Математика")}
  Физике: ${calcAvgPoint("Физика")}
  Информатике: ${calcAvgPoint("Информатика")}
  Химии: ${calcAvgPoint("Химия")}`
  );

  alert("Теперь проверьте консоль!");
}

/* Обработчики событий */
promptUsername.addEventListener("click", () => enterUsername());
trianglePerimeter.addEventListener("click", () => calculateTrianglePerimeter());
searchNuber.addEventListener("click", () => searchMaxNuber());
validTriangle.addEventListener("click", () => validateTriangle());
checkRange.addEventListener("click", () => checkAgeRange());
breakKunc.addEventListener("click", () => checkBreak());
callbackFunc.addEventListener("click", () => returnCallback());
geometricFigure.addEventListener("click", () => checkGeometricFigure());
avgStudentsPoint.addEventListener("click", () => calcAvgStudentsPoint());
