document.addEventListener("DOMContentLoaded", function () {
  function setFullHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  setFullHeight();

  window.addEventListener("resize", setFullHeight);
});
