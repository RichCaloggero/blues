document.querySelectorAll("tr").forEach((row, rowIndex) => {
row.querySelectorAll("td, th").forEach((cell, cellIndex) => {
const newCell = document.createElement(
(rowIndex === 0 || cellIndex === 0)? "th" : "td"
); // createElement
newCell.textContent = cell.textContent;
cell.replaceWith(newCell);
}); // fix cell
}); // fix row

