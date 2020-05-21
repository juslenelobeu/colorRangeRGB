window.addEventListener('load', ranges);

function ranges() {
  // red
  var rangeR = document.querySelector('input#rangeRed');
  var numberRed = document.querySelector('input#numberRed');

  // green
  var rangeG = document.querySelector('input#rangeGreen');
  var numberGreen = document.querySelector('input#numberGreen');

  // blue
  var rangeB = document.querySelector('input#rangeBlue');
  var numberBlue = document.querySelector('input#numberBlue');

  // boxColor
  var boxColor = document.querySelector('div#boxColor');

  // red
  rangeR.addEventListener('input', function () {
    numberRed.value = rangeR.value;
    boxColor.style.backgroundColor = `rgb(${rangeR.value},${rangeG.value},${rangeB.value})`;
  });

  // green
  rangeG.addEventListener('input', function () {
    numberGreen.value = rangeG.value;
    boxColor.style.backgroundColor = `rgb(${rangeR.value},${rangeG.value},${rangeB.value})`;
  });

  // blue
  rangeB.addEventListener('input', function () {
    numberBlue.value = rangeB.value;
    boxColor.style.backgroundColor = `rgb(${rangeR.value},${rangeG.value},${rangeB.value})`;
  });
}
