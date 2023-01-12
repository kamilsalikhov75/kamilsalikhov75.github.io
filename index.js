var convert = require('xml-js');

const weekDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const teacher = "Салихов И.И."
const lessons = {
  high: [],
  low: []
}

const input = document.querySelector(".file-input");
const block = {
  low: document.getElementById("low"),
  high: document.getElementById("high")
}
const reader = new FileReader();

input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  reader.readAsText(file)
  reader.onload = function () {
    const fileJsonString = convert.xml2json(reader.result, { compact: true, spaces: 4 });
    const fileJson = JSON.parse(fileJsonString);
    const RowsArr = fileJson.Workbook.Worksheet[0].Table.Row;
    let weekDay;
    RowsArr.forEach(row => {
      if (Array.isArray(row.Cell)) {
        row.Cell.forEach((cell, id) => {
          if (cell.hasOwnProperty("Data") && weekDays.includes(cell.Data._text)) {
            weekDay = cell.Data._text
          }
          if (cell.hasOwnProperty("Data") && cell.Data._text === teacher) {
            const date = new Date(row.Cell[id - 7].Data._text);
            const time = `${date.getHours()}:${date.getMinutes()}`
            const lessonObj = {
              weekDay,
              time,
              week: row.Cell[id - 6].Data._text,
              lessonName: row.Cell[id - 5].Data._text,
              building: row.Cell[id - 4].Data._text,
              cabinet: row.Cell[id - 3].Data._text,
              lessonType: row.Cell[id - 2].Data._text,
              teacher: cell.Data._text
            }
            if (lessonObj.week === "н"){
              lessons.low.push(lessonObj);
            }else{
              lessons.high.push(lessonObj);
            }
          }
        })
      }
    });
    lessons.low.forEach((lessonObj)=>{
      block.low.insertAdjacentHTML("beforeEnd", `
            <div class="block">
               <p class="text">${lessonObj.weekDay}</p>
               <p class="text">Время: ${lessonObj.time}</p>
               <p class="text">Неделя: ${lessonObj.week}</p>
               <p class="text">Здание: ${lessonObj.building}</p>
               <p class="text">Аудитория: ${lessonObj.cabinet}</p>
               <p class="text">Предмет: ${lessonObj.lessonName}</p>
               <p class="text">Преподаватель: ${lessonObj.teacher}</p>
             </div>`)
    })
    lessons.high.forEach((lessonObj)=>{
      block.high.insertAdjacentHTML("beforeEnd", `
            <div class="block">
               <p class="text">${lessonObj.weekDay}</p>
               <p class="text">Время: ${lessonObj.time}</p>
               <p class="text">Неделя: ${lessonObj.week}</p>
               <p class="text">Здание: ${lessonObj.building}</p>
               <p class="text">Аудитория: ${lessonObj.cabinet}</p>
               <p class="text">Предмет: ${lessonObj.lessonName}</p>
               <p class="text">Преподаватель: ${lessonObj.teacher}</p>
             </div>`)
    })
  }
  reader.error = function () {
    alert("Ашибощка");
  }
})