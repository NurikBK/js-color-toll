const hexInput = document.querySelector('#hexInput');
const inputColor = document.querySelector('#inputColor');

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
