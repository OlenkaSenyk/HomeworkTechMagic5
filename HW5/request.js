"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
const table = document.getElementById("task1-table");
function getAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        const data = yield response.json();
        return data;
    });
}
function createTr1(post, colCount) {
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
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        clearTable();
        const posts = yield getAllData();
        posts.forEach((post) => {
            const postChild = createTr1(post, 4);
            table === null || table === void 0 ? void 0 : table.appendChild(postChild);
        });
    });
}
function clearTable() {
    const rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}
(_a = document
    .getElementById("get-all-data-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", createTable);
(_b = document
    .getElementById("close-all-data-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => clearTable());
