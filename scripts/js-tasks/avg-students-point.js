const jsSection = document.querySelector(".section"),
  arrayOfStudents = jsSection.querySelector("#arrayOfStudents");

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

arrayOfStudents.addEventListener("click", () => calcAvgStudentsPoint());
//geometricFigure.addEventListener("click", () => checkGeometricFigure());
