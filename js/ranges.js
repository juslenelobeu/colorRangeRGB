window.addEventListener('load', () => {
  ranges();
});

let controlRed = document.querySelector('#controlRed');
let viewValueRed = document.querySelector('#viewValueRed');
let controlGreen = document.querySelector('#controlGreen');
let viewValueGreen = document.querySelector('#viewValueGreen');
let controlBlue = document.querySelector('#controlBlue');
let viewValueBlue = document.querySelector('#viewValueBlue');
let controlAlfa = document.querySelector('#controlAlfa');
let viewValueAlfa = document.querySelector('#viewValueAlfa');

let controlsRgb = document.querySelector('#controlsRgb');
let displayRgb = document.querySelector('#displayRgb');
let viewValueRgb = document.querySelector('#viewValueRgb');

function rgba(){
  const red = controlRed.value;
  const green = controlGreen.value;
  const blue = controlBlue.value;
  const alfa = controlAlfa.value;

  return `rgba(${red},${green},${blue},${alfa})`
}

function ranges(){
  
  document.querySelector("#btnCopy").addEventListener("click",
  () => {
      viewValueRgb.select();
      document.execCommand('copy');
      document.querySelector('#alert').innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Copied</strong> with success!
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
      `;
  })
  // red
  controlRed.addEventListener('input', () => {
      viewValueRed.value = controlRed.value;
      viewValueRgb.value = rgba();
      // css
      displayRgb.style.backgroundColor = rgba();
      controlsRgb.style.boxShadow = `0 0 3rem ${rgba()}`;
  });

  // green
  controlGreen.addEventListener('input', () => {
      viewValueGreen.value = controlGreen.value;
      viewValueRgb.value = rgba();
      displayRgb.style.backgroundColor = rgba();
      controlsRgb.style.boxShadow = `0 0 3rem ${rgba()}`;
  });

  // blue
  controlBlue.addEventListener('input', () => {
      viewValueBlue.value = controlBlue.value;
      viewValueRgb.value = rgba();
      displayRgb.style.backgroundColor = rgba();
      controlsRgb.style.boxShadow = `0 0 3rem ${rgba()}`;
  });

  // alfa
  controlAlfa.addEventListener('input', () => {
      viewValueAlfa.value = controlAlfa.value;
      viewValueRgb.value = rgba();
      displayRgb.style.backgroundColor = rgba();
      controlsRgb.style.boxShadow = `0 0 3rem ${rgba()}`;
  });
}