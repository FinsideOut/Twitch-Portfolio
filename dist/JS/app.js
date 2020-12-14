// scroll stuff
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
const animation = document.getElementById("animation-wrapper");
window.onscroll = function () {
  if (window.pageYOffset > 10) {
    header.classList.add("header-scrolled");
    footer.classList.add("footer-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    footer.classList.remove("footer-scrolled");
    animation.classList.add("scrolled-home");
    animation.classList.remove("scrolled-about");
  }

  if (window.pageYOffset > 400) {
    animation.classList.remove("scrolled-home");

    animation.classList.add("scrolled-about");
  }
};

$("a").on("click", function (e) {
  if (this.hash !== "") {
    console.log(e.target);
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
