const hexInput = document.querySelector('#hexInput');
const inputColor = document.querySelector('#inputColor');
const slider = document.querySelector('#slider');

const sliderText = document.querySelector('#sliderText');

const alteredColorEl = document.querySelector('#alteredColor');

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
  let strippedHex = hex.replace('#', '');

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

const convertRGBToHex = (r, g, b) => {
  const firstPair = ('0' + r.toString(16)).slice(-2);
  const secondPair = ('0' + g.toString(16)).slice(-2);
  const thirdPair = ('0' + b.toString(16)).slice(-2);

  const hex = '#' + firstPair + secondPair + thirdPair;
  return hex;
};

const alterColor = (hex, percentage) => {
  const { r, g, b } = convertHexToRgb(hex);

  const amount = Math.floor((percentage / 100) * 255);

  const newR = r + amount;
  const newG = g + amount;
  const newB = b + amount;

  alteredColorEl.style.backgroundColor = convertRGBToHex(newR, newG, newB);
};

slider.addEventListener('input', () => {
  sliderText.innerText = `${slider.value}%`;
  alterColor(hexInput.value, slider.value);
});
