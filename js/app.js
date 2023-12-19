const colorData = [];

function showColorOptions(boxNumber) {
  document.querySelectorAll('.color-option-container').forEach(container => {
    container.classList.remove('active');
  });

  const colors = ['Rojo', 'Azul', 'Blanco', 'Negro', 'Amarillo', 'Verde'];
  let html = `<div class="color-option-container active" id="color-options-${boxNumber}"><div class="color-options">`;

  for (let i = 0; i < colors.length; i++) {
    html += `<div class="color-option" style="background-color: ${getColorCode(colors[i])}" onclick="selectColor(${boxNumber}, '${colors[i]}')"></div>`;
  }

  html += '</div></div>';

  const colorBox = document.getElementById(`box${boxNumber}`);
  colorBox.innerHTML += html;
}

function selectColor(boxNumber, color) {
  const existingIndex = colorData.findIndex(data => data.cuadrado === boxNumber);

  if (existingIndex !== -1) {
    colorData[existingIndex].color = color;
  } else {
    colorData.push({ cuadrado: boxNumber, color: color });
  }

  const selectedBox = document.getElementById(`box${boxNumber}`);
  selectedBox.style.backgroundColor = getColorCode(color);

  if (colorData.length === 6) {
    saveAndShowColorData();
  }
}

function saveAndShowColorData() {
  const sortedColorData = colorData.slice().sort((a, b) => a.cuadrado - b.cuadrado);

  const formattedOutput = sortedColorData.map(entry => JSON.stringify(entry, null, 2)).join(',<br>');
  const output = `<br>${formattedOutput}<br>`;

  document.getElementById('color-results').innerHTML = output;
}

function getColorCode(colorName) {
  switch (colorName.toLowerCase()) {
    case 'rojo':
      return '#C70039';
    case 'azul':
      return 'blue';
    case 'blanco':
      return 'white';
    case 'negro':
      return 'black';
    case 'amarillo':
      return 'yellow';
    case 'verde':
      return 'green';
    default:
      return colorName; 
  }
}
