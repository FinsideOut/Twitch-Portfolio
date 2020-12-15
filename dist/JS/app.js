// scroll stuff
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
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
function getPos(el) {
  // yay readability
  for (
    var lx = 0, ly = 0;
    el != null;
    lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
  );
  return { x: lx, y: ly };
}
// from
// https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag

const animation = document.getElementById("animation-wrapper");
// const animationPos = getPos(animation);
// const animationOrigX = animationPos.x - 100 + "px";
// const animationOrigY = animationPos.y - 150 + "px";

const aboutStop = document.getElementById("about-stop");
const aboutPos = getPos(aboutStop);
const aboutPosX = aboutPos.x - animation.offsetWidth / 4 + "px";
const aboutPosY = aboutPos.y - 250 + "px";

const iconsStop = document.getElementById("icons-stop");
const iconsPos = getPos(iconsStop);
const iconsPosX = iconsPos.x - animation.offsetWidth / 2 - 150 + "px";
const iconsPosY = iconsPos.y - 150 + "px";

const videoStop = document.getElementById("video-stop");
const videoPos = getPos(videoStop);
const videoPosX = videoPos.x - animation.offsetWidth / 2 + "px";
const videoPosY = videoPos.y - 100 + "px";

const contactStop = document.getElementById("contact-stop");
const contactPos = getPos(contactStop);
const contactPosX = contactPos.x - animation.offsetWidth / 3 + "px";
const contactPosY = contactPos.y + 150 + "px";

const bottomStop = document.getElementById("bottom-stop");
const bottomPos = getPos(bottomStop);
const bottomPosX = bottomPos.x - animation.offsetWidth / 2 + "px";
const bottomPosY = bottomPos.y - 100 + "px";

window.onscroll = function () {
  if (getScrollPercent() > 2 && getScrollPercent() < 15) {
    header.classList.add("header-scrolled");
    footer.classList.add("footer-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    footer.classList.remove("footer-scrolled");
    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-video");
    animation.classList.remove("scrolled-contact");

    animation.style.left = "";
    animation.style.top = "";
  }

  if (getScrollPercent() > 15 && getScrollPercent() < 32) {
    animation.classList.add("scrolled-about");
    animation.style.left = aboutPosX;
    animation.style.top = aboutPosY;

    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-video");
    animation.classList.remove("scrolled-contact");
  }
  if (getScrollPercent() > 32 && getScrollPercent() < 50) {
    // animation.classList.remove("scrolled-about");
    animation.classList.add("scrolled-icons");
    animation.style.left = iconsPosX;
    animation.style.top = iconsPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-video");
    animation.classList.remove("scrolled-contact");
  }
  if (getScrollPercent() > 50 && getScrollPercent() < 70) {
    animation.classList.add("scrolled-icons");
    animation.style.left = videoPosX;
    animation.style.top = videoPos.y - 800 + "px";
    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-video");
    animation.classList.remove("scrolled-contact");
  }

  if (getScrollPercent() > 70 && getScrollPercent() < 80) {
    animation.classList.add("scrolled-video");
    animation.style.left = videoPosX;
    animation.style.top = videoPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-contact");
  }
  if (getScrollPercent() > 80 && getScrollPercent() < 95) {
    animation.classList.add("scrolled-contact");
    animation.style.left = contactPosX;
    animation.style.top = contactPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-video");
  }
  if (getScrollPercent() > 95) {
    animation.classList.add("scrolled-video");
    animation.style.left = bottomPosX;
    animation.style.top = bottomPosY;
    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-contact");
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
