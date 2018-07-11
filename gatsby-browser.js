exports.onClientEntry = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    new SmoothScroll('a[href*="#"]');
  });

};
