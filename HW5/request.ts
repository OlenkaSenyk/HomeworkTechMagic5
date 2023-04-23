const table = document.getElementById("task1-table") as HTMLTableElement;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getAllData(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

function createTr1(post: Post, colCount: number): HTMLElement {
  let tds = [];
  for (let i = 0; i < colCount; i++) {
    tds.push(document.createElement("td"));
  }

  tds[0].innerText = post.userId.toString();
  tds[1].innerText = post.id.toString();
  tds[2].innerText = post.title;
  tds[3].innerText = post.body;

  let tr = document.createElement("tr");
  tds.forEach((td) => tr.append(td));

  return tr;
}

async function createTable() {
  clearTable();
  const posts = await getAllData();

  posts.forEach((post) => {
    const postChild = createTr1(post, 4);
    table?.appendChild(postChild);
  });
}

function clearTable() {
  const rowCount = table.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

document
  .getElementById("get-all-data-btn")
  ?.addEventListener("click", createTable);

document
  .getElementById("close-all-data-btn")
  ?.addEventListener("click", () => clearTable());
