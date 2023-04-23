const tableBefore = document.getElementById(
  "task2-before-table"
) as HTMLTableElement;
const tableAfter = document.getElementById(
  "task2-after-table"
) as HTMLTableElement;

type ObjectShape = {
  id: number;
  title: string;
  body: string;
  completed: boolean;
};

function UpdateObjectInArray<T extends ObjectShape>(
  initialArray: T[],
  key: keyof T,
  value: T[keyof T],
  patch: Partial<T>
): T[] {
  let newArray: T[] = [];
  initialArray.forEach((e) => newArray.push(e));

  let index: number[] = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i][key] === value) {
      index.push(i);
    }
  }
  for (let i = 0; i < index.length; i++)
    newArray[index[i]] = { ...newArray[index[i]], ...patch };

  return newArray;
}

const arr: ObjectShape[] = [
  { id: 1, title: "Task A", body: "Body for A task", completed: false },
  { id: 2, title: "Task B", body: "Body for B task", completed: true },
  { id: 3, title: "Task C", body: "Body for C task", completed: false },
  { id: 4, title: "Task A", body: "Body for this task", completed: false },
  { id: 5, title: "Task E", body: "Body for E task", completed: true },
];

function createTr2(task: ObjectShape, colCount: number): HTMLElement {
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
  const newArr = UpdateObjectInArray<ObjectShape>(arr, "title", "Task A", {
    body: "New description for this task",
    completed: true,
  });

  arr.forEach((task) => {
    const taskChild = createTr2(task, 4);
    tableBefore?.appendChild(taskChild);
  });

  newArr.forEach((task) => {
    const taskChild = createTr2(task, 4);
    tableAfter?.appendChild(taskChild);
  });
}

function clearTables() {
  const rowCount = tableBefore.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    tableBefore.deleteRow(i);
    tableAfter.deleteRow(i);
  }
}

document
  .getElementById("update-object-btn")
  ?.addEventListener("click", createTables);
