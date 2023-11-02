const grid = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(grid);
grid.classList.add('grid');


//Create the grid row and insert divs inside it
for(let i = 0; i < 16; i++) {
  const gridRow = document.createElement('div');
  for(let j = 0; j < 16; j++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('square');
    gridRow.appendChild(gridSquare);
  }
  grid.appendChild(gridRow);
  gridRow.classList.add('row');
}

//Add the hover listener to change color of individual grids
grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.square')) {
        e.target.classList.add('colorChange');
    }
  });