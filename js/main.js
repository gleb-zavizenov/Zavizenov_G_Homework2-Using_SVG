( () => {

  //select elements with JavaScript
  let maracasSVG = document.getElementById("Maracas-icon")
  let electricSVG = document.getElementById("Electric_guitar-icon")
  let violinSVG = document.getElementById("Violin-icon")
  let guitarSVG = document.getElementById("Guitar-icon")
  let boomboxSVG = document.getElementById("Boombox-icon")
  let dynamicSVG = document.getElementById("Dynamic_microphone-icon")
  let studioSVG = document.getElementById("Studio_microphone-icon")
  let pianoSVG = document.getElementById("Piano-icon")
  let trumpetSVG = document.getElementById("Trumpet-icon")
  let fluteSVG = document.getElementById("Flute-icon")

  function logMyId() {
    console.log(this.id);
  }

  function addBlur() {
    this.classList.toggle("active");
  }

  maracasSVG.addEventListener("click", logMyId);
  electricSVG.addEventListener("click", logMyId);
  violinSVG.addEventListener("click", logMyId);
  guitarSVG.addEventListener("click", logMyId);
  boomboxSVG.addEventListener("click", logMyId);
  dynamicSVG.addEventListener("click", logMyId);
  studioSVG.addEventListener("click", logMyId);
  pianoSVG.addEventListener("click", logMyId);
  trumpetSVG.addEventListener("click", logMyId);
  fluteSVG.addEventListener("click", logMyId);

  maracasSVG.addEventListener("click", addBlur);
  electricSVG.addEventListener("click", addBlur);
  violinSVG.addEventListener("click", addBlur);
  guitarSVG.addEventListener("click", addBlur);
  boomboxSVG.addEventListener("click", addBlur);
  dynamicSVG.addEventListener("click", addBlur);
  studioSVG.addEventListener("click", addBlur);
  pianoSVG.addEventListener("click", addBlur);
  trumpetSVG.addEventListener("click", addBlur);
  fluteSVG.addEventListener("click", addBlur);

})();
