// scroll stuff
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
const animation = document.getElementById("animation-wrapper");
// $(window).on("scroll", function () {
//   var s = $(window).scrollTop(),
//     d = $(document).height(),
//     c = $(window).height();

//   var getScrollPercent() = (s / (d - c)) * 100;

//   // console.clear();
//   console.log(scrollPercent);
// });
function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  console.log(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
window.onscroll = function () {
  if (getScrollPercent() > 2) {
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

  if (getScrollPercent() > 15) {
    animation.classList.add("scrolled-about");
  }
  if (getScrollPercent() > 32) {
    animation.classList.remove("scrolled-about");
    animation.classList.add("scrolled-icons");
  }
  if (getScrollPercent() > 50) {
    animation.classList.add("scrolled-video");
  }
  if (getScrollPercent() > 80) {
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
