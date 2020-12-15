// scroll stuff
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
const animation = document.getElementById("animation-wrapper");

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    header.classList.add("header-scrolled");
    footer.classList.add("footer-scrolled");
    // animation.classList.remove("scrolled-home");
  } else {
    header.classList.remove("header-scrolled");
    footer.classList.remove("footer-scrolled");

    // animation.classList.add("scrolled-home");
    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-video");
    animation.classList.remove("scrolled-contact");
  }

  if (window.pageYOffset > 350) {
    animation.classList.add("scrolled-about");
  }
  if (window.pageYOffset > 800) {
    animation.classList.remove("scrolled-about");
    animation.classList.add("scrolled-icons");
  }
  if (window.pageYOffset > 1600) {
    animation.classList.add("scrolled-video");
  }
  if (window.pageYOffset > 2600) {
    animation.classList.add("scrolled-contact");
  }
};

// smooth scroll from traversy media
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

// scroll top on refresh
$(window).on("unload", function () {
  $(window).scrollTop(0);
});
