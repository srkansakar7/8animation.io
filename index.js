
const elem = document.getElementById('spp');

//chk.addEventListener('click', () => {
  //elem.style.animationPlayState = 'paused';
//});
function myPauseFunction() {
  elem.style.animationPlayState = "paused";
  document.body.classList.toggle('light');
}
function myPlayFunction() {
  elem.style.animationPlayState = "running";
  document.body.classList.toggle('dark');
}
