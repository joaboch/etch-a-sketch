const body = document.querySelector('body');
const container = document.createElement('div'); 
const gridContainer = document.createElement('div');
const grid = document.createElement('div');
const btn = document.createElement('button');


body.appendChild(container);
container.appendChild(btn);
container.appendChild(gridContainer);
gridContainer.appendChild(grid);


container.classList.add('container');
gridContainer.classList.add('grid-container');
grid.classList.add('grid');
btn.textContent = 'New grid';

createGrid(16, 45);


//Create the grid row and insert divs inside it
function createGrid(gridSize, squareSize) {
  for(let j = 0; j < gridSize * gridSize; j++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('square');
    gridSquare.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
    grid.appendChild(gridSquare);
  }
}

//Add the hover listener to change color of individual grids
grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.square')) {
        e.target.style.backgroundColor = randomRgbColor();
    }
  });

//Add the button that specifies the grid squares per side and calculates the indiviual squares size
btn.addEventListener('click', () => {
  //The while removes the grid before creating a new one
  while(grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  gridSize = prompt('What grid size would you like? (Max 100squares)');
  //Validate the max number of squares per side
  if(gridSize > 100) {
    gridSize = prompt('What grid size would you like? (Max 100squares)');
  }
  const squareSize = grid.clientWidth / gridSize;
  createGrid(gridSize, squareSize);
})

//Create a function that generates the random color
const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgba(' + r + ',' + g + ',' + b + ', 0.5)';
};

