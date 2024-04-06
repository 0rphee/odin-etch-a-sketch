const divGrid = document.querySelector(".grid");
const btn = document.querySelector(".btn");

divGrid.addEventListener("mouseover", (e) => {
    console.log(e.target)
    if (String(e.target.classList).startsWith("gridEl")) {
        e.target.classList = "gridElement gridElementPreviouslyHovered";
    }
});

btn.addEventListener("click", () => {
    let newVal = NaN;
    let numIsValid = false;
    let promptText  = "Enter the size of a new grid! (1-99)";
    while (!numIsValid){
        newVal = Number.parseInt(prompt(promptText));
        console.log(newVal);
        numIsValid = 0 < newVal && newVal < 100;
        if (!numIsValid) {
            promptText = "Error! Enter the size of a new grid! (1-99)"
        }
    }
    divGrid.replaceChildren();
    createGrid(newVal);
});

function createGrid(size) {
    const style = document.querySelector('#cellSize');
    const minCellSize = 100/size;
    style.textContent = `.gridElement { min-height: ${minCellSize}vh }`;
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList = "gridRow";
        divGrid.appendChild(gridRow);
        for (let j = 0; j < size; j++) {
            const newCell = document.createElement("div");
            newCell.classList = "gridElement";
            gridRow.appendChild(newCell);
        }
    }

}

function main() {
    createGrid(16)
}

// EXECUTION
main();
