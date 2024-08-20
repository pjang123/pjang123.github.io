const asciiCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const container = document.querySelector('.ascii-container');
const columnWidth = 40; // Width of each column (in pixels)
const characterHeight = 20; // Height of each character (in pixels)

// Function to calculate the number of columns and rows
function calculateLayout() {
    const numberOfColumns = Math.ceil(window.innerWidth / columnWidth);
    const numberOfRows = Math.ceil(window.innerHeight / characterHeight);
    return { numberOfColumns, numberOfRows };
}

// Function to get a random character from the ASCII characters
function getRandomChar() {
    return asciiCharacters[Math.floor(Math.random() * asciiCharacters.length)];
}

// Function to create a column of ASCII characters
function createAsciiColumn(numberOfRows) {
    const column = document.createElement('div');
    column.className = 'ascii-column';
    
    for (let i = 0; i < numberOfRows; i++) {
        const span = document.createElement('span');
        span.textContent = getRandomChar();
        span.style.top = `${i * characterHeight}px`;
        const delay = Math.random() * 5; // Random delay for animation
        span.style.animationDelay = `${delay}s`;

        column.appendChild(span);
    }

    return column;
}

// Function to generate the ASCII grid
function generateAsciiGrid() {
    container.innerHTML = '';
    const { numberOfColumns, numberOfRows } = calculateLayout();
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < numberOfColumns; i++) {
        const column = createAsciiColumn(numberOfRows);
        fragment.appendChild(column);
    }

    container.appendChild(fragment);
}

// Generate the ASCII grid on page load and resize
generateAsciiGrid();
window.addEventListener('resize', generateAsciiGrid);
