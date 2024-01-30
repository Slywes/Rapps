window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 110 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("main-nav").style.backgroundColor =
      "rgba(20, 20, 20, 20)";
  } else {
    document.getElementById("main-nav").style.backgroundColor =
      "rgba(20, 20, 20, 0.2)"; // veya orijinal renk
  }
}
