"use strict";
var _a;
const tableBefore = document.getElementById("task2-before-table");
const tableAfter = document.getElementById("task2-after-table");
function UpdateObjectInArray(initialArray, key, value, patch) {
  let newArray = [];
  initialArray.forEach((e) => newArray.push(e));
  let index = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i][key] === value) {
      index.push(i);
    }
  }
  for (let i = 0; i < index.length; i++)
    newArray[index[i]] = Object.assign(
      Object.assign({}, newArray[index[i]]),
      patch
    );
  return newArray;
}
const arr = [
  { id: 1, title: "Task A", body: "Body for A task", completed: false },
  { id: 2, title: "Task B", body: "Body for B task", completed: true },
  { id: 3, title: "Task C", body: "Body for C task", completed: false },
  { id: 4, title: "Task A", body: "Body for this task", completed: false },
  { id: 5, title: "Task E", body: "Body for E task", completed: true },
];
function createTr2(task, colCount) {
  let tds = [];
  for (let i = 0; i < colCount; i++) {
    tds.push(document.createElement("td"));
  }
  tds[0].innerText = task.id.toString();
  tds[1].innerText = task.title;
  tds[2].innerText = task.body;
  tds[3].innerText = task.completed.toString();
  let tr = document.createElement("tr");
  tds.forEach((td) => tr.append(td));
  return tr;
}
function createTables() {
  clearTables();
  const newArr = UpdateObjectInArray(arr, "title", "Task A", {
    body: "New description for this task",
    completed: true,
  });
  arr.forEach((task) => {
    const taskChild = createTr2(task, 4);
    tableBefore === null || tableBefore === void 0
      ? void 0
      : tableBefore.appendChild(taskChild);
  });
  newArr.forEach((task) => {
    const taskChild = createTr2(task, 4);
    tableAfter === null || tableAfter === void 0
      ? void 0
      : tableAfter.appendChild(taskChild);
  });
}
function clearTables() {
  const rowCount = tableBefore.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    tableBefore.deleteRow(i);
    tableAfter.deleteRow(i);
  }
}
(_a = document.getElementById("update-object-btn")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("click", createTables);
