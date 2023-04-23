const taskNum = document.getElementById("task-num") as HTMLSelectElement;
const pageTitle = document.getElementById("page-title") as HTMLHeadingElement;
const getAllDataBtn = document.getElementById(
  "get-all-data-btn"
) as HTMLButtonElement;
const closeAllDataBtn = document.getElementById(
  "close-all-data-btn"
) as HTMLButtonElement;
const updateObjBtn = document.getElementById(
  "update-object-btn"
) as HTMLButtonElement;
const task1Title = document.getElementById(
  "table1-title"
) as HTMLHeadingElement;
const task2TitleBefore = document.getElementsByClassName(
  "table2-title"
)[0] as HTMLHeadingElement;
const task2TitleAfter = document.getElementsByClassName(
  "table2-title"
)[1] as HTMLHeadingElement;
const task1Table = document.getElementById("task1-table") as HTMLTableElement;
const task2Tables = document.getElementById("task2-tables") as HTMLDivElement;

function showTask(taskNum: number) {
  switch (taskNum) {
    case 1:
      task1Title.style.display = "block";
      task2TitleBefore.style.display = "none";
      task2TitleAfter.style.display = "none";
      task1Table.style.display = "table";
      task2Tables.style.display = "none";
      getAllDataBtn.style.display = "inline-block";
      closeAllDataBtn.style.display = "inline-block";
      updateObjBtn.style.display = "none";
      pageTitle.innerText = "Task 1";
      break;
    case 2:
      task1Title.style.display = "none";
      task2TitleBefore.style.display = "block";
      task2TitleAfter.style.display = "block";
      task1Table.style.display = "none";
      task2Tables.style.display = "flex";
      getAllDataBtn.style.display = "none";
      closeAllDataBtn.style.display = "none";
      updateObjBtn.style.display = "inline-block";
      pageTitle.innerText = "Task 2";
      break;
  }
}

window.onload = () => showTask(1);

taskNum?.addEventListener("change", () => {
  showTask(Number(taskNum.value));
});
