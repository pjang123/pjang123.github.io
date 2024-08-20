<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .ascii-container {
      position: relative;
      overflow: hidden;
    }

    .ascii-column {
      position: absolute;
      width: 40px;
      height: 100%;
      overflow: hidden;
      white-space: nowrap;
    }

    .ascii-column span {
      position: absolute;
      font-family: monospace;
      color: #0f0;
      animation: drop 1s linear infinite;
    }

    @keyframes drop {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(100%);
      }
    }
  </style>
</head>
<body>
  <div class="ascii-container"></div>
  <script>
    const asciiCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const container = document.querySelector('.ascii-container');
    const columnWidth = 40;
    const characterHeight = 20;

    function calculateLayout() {
      const numberOfColumns = Math.ceil(window.innerWidth / columnWidth);
      const numberOfRows = Math.ceil(window.innerHeight / characterHeight);
      return { numberOfColumns, numberOfRows };
    }

    function getRandomChar() {
      return asciiCharacters[Math.floor(Math.random() * asciiCharacters.length)];
    }

    function createAsciiColumn(numberOfRows) {
      const column = document.createElement('div');
      column.className = 'ascii-column';

      for (let i = 0; i < numberOfRows; i++) {
        const span = document.createElement('span');
        span.textContent = getRandomChar();
        span.style.top = `${i * characterHeight}px`;
        const delay = Math.random() * 5;
        span.style.animationDelay = `${delay}s`;

        column.appendChild(span);
      }

      return column;
    }

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

    generateAsciiGrid();
    window.addEventListener('resize', generateAsciiGrid);
  </script>
</body>
</html>
