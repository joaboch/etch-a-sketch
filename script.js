const grid = document.createElement('div');
const body = document.querySelector('body');
const btn = document.createElement('button');



btn.textContent = 'New grid';
body.appendChild(btn);
body.appendChild(grid);
grid.classList.add('grid');


createGrid(16, 45);


//Create the grid row and insert divs inside it
function createGrid(gridSize, squareSize) {
  for(let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    for(let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('square');
      gridSquare.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
      gridRow.appendChild(gridSquare);
    }
    grid.appendChild(gridRow);
    gridRow.classList.add('row');
  }
}

//Add the hover listener to change color of individual grids
grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.square')) {
        e.target.classList.add('colorChange');
    }
  });

//Add the button that specifies the grid squares per side and calculates the indiviual squares size
btn.addEventListener('click', () => {
  //The while removes the grid before creating a new one
  while(grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  gridSize = prompt('What grid size would you like?');
  const squareSize = grid.clientWidth / gridSize;
  createGrid(gridSize, squareSize);
})