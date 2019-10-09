document.querySelectorAll("tr").forEach((row, rowIndex) => {
row.querySelectorAll("td, th").forEach((cell, cellIndex) => {
const newCell = document.createElement(
(rowIndex === 0 || cellIndex === 0)? "th" : "td"
); // createElement

if (cell.querySelector("a")) {
newCell.appendChild(cell.querySelector("a"));
} else {
newCell.textContent = cell.textContent;
} // if
cell.replaceWith(newCell);
}); // fix cell
}); // fix row

