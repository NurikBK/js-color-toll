const hexInput = document.querySelector('#hexInput');
const inputColor = document.querySelector('#inputColor');
const slider = document.querySelector('#slider');

const sliderText = document.querySelector('#sliderText');

const isValidHex = (hex) => {
  if (!hex) return false;

  const strippedHex = hex.replace('#', '');

  return strippedHex.length === 3 || strippedHex.length === 6;
};
// change bgColor if input is valid
hexInput.addEventListener('keyup', () => {
  const hexValue = hexInput.value;
  if (!isValidHex(hexValue)) return;

  const strippedHex = hexValue.replace('#', '');

  inputColor.style.backgroundColor = `#${strippedHex}`;
});

//  convert hex to rgb
const convertHexToRgb = (hex) => {
  if (!isValidHex(hex)) return null;
  let strippedHex = hex /*trim()*/
    .replace('#', '');

  if (strippedHex.length === 3) {
    strippedHex = strippedHex
      .split('')
      .map((value) => {
        return value + value;
      })
      .join('');
  }

  const r = parseInt(strippedHex.substring(0, 2), 16);
  const g = parseInt(strippedHex.substring(2, 4), 16);
  const b = parseInt(strippedHex.substring(4, 6), 16);

  return { r, g, b };
};

slider.addEventListener('input', () => {
  console.log(slider.value);
  sliderText.innerText = `${slider.value}%`;
});
