// preload
$(window).on("beforeunload", function () {
  $("body").hide();
  $(window).scrollTop(0);
});
window.addEventListener("load", () => {
  const preload = document.getElementById("page-intro");
  preload.classList.add("finished");
  header.classList.add("loaded");
  footer.classList.add("loaded");
  headlines.classList.add("loaded");
  shapes.classList.add("loaded");
  bg.classList.add("bg-loaded");
});
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
const headlines = document.getElementById("headlines");
const animation = document.getElementById("animation-wrapper");
const shapes = document.getElementById("shapes-container");
const bg = document.getElementById("bg");
const bgWrapper = document.getElementById("bg-wrapper");
// scroll stuff
const aboutStop = document.getElementById("about-stop");
const aboutPos = getPos(aboutStop);
const aboutPosX = aboutPos.x - animation.offsetWidth / 4 + "px";
const aboutPosY = aboutPos.y - animation.offsetHeight / 2 + "px";

const iconsStop = document.getElementById("icons-stop");
const iconsPos = getPos(iconsStop);
const iconsPosX = iconsPos.x - animation.offsetWidth / 2 + "px";
const iconsPosY = iconsPos.y - animation.offsetHeight / 2 + "px";

const videoStop = document.getElementById("video-stop");
const videoPos = getPos(videoStop);
const videoPosX = videoPos.x + animation.offsetWidth / 4 + "px";
const videoPosY = videoPos.y - animation.offsetHeight * 1.5 + "px";

const middleStop = document.getElementById("middle-stop");
const middlePos = getPos(middleStop);
const middlePosX = middlePos.x - animation.offsetWidth / 2 + "px";
const middlePosY = middlePos.y - animation.offsetHeight / 1.5 + "px";

const contactStop = document.getElementById("contact-stop");
const contactPos = getPos(contactStop);
const contactPosX = contactPos.x - animation.offsetWidth / 3 + "px";
const contactPosY = contactPos.y + "px";

const bottomStop = document.getElementById("bottom-stop");
const bottomPos = getPos(bottomStop);
const bottomPosX = bottomPos.x - animation.offsetWidth / 2 + "px";
const bottomPosY = bottomPos.y - animation.offsetHeight / 1.5 + "px";

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  // console.log(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
function getPos(el) {
  // from
  // https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
  for (
    var lx = 0, ly = 0;
    el != null;
    lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
  );
  return { x: lx, y: ly };
}

window.onscroll = function () {
  // scroll start
  if (getScrollPercent() > 2) {
    header.classList.add("header-scrolled");
    footer.classList.add("footer-scrolled");
  } else {
    // top reset
    header.classList.remove("header-scrolled");
    footer.classList.remove("footer-scrolled");

    bgWrapper.classList.remove("bg-about");
    bgWrapper.classList.remove("bg-icons");
    bgWrapper.classList.remove("bg-video");
    bgWrapper.classList.remove("bg-contact");

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-middle");
    animation.classList.remove("scrolled-contact");

    animation.style.left = "";
    animation.style.top = "";
  }
  // about section
  if (getScrollPercent() > 5 && getScrollPercent() < 23) {
    animation.classList.add("scrolled-about");

    animation.style.left = aboutPosX;
    animation.style.top = aboutPosY;

    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-middle");
    animation.classList.remove("scrolled-contact");

    bgWrapper.classList.add("bg-about");

    bgWrapper.classList.remove("bg-icons");
    bgWrapper.classList.remove("bg-video");
    bgWrapper.classList.remove("bg-contact");
  }
  // icons section
  if (getScrollPercent() > 23 && getScrollPercent() < 38) {
    animation.classList.add("scrolled-icons");
    animation.style.left = iconsPosX;
    animation.style.top = iconsPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-middle");
    animation.classList.remove("scrolled-contact");

    bgWrapper.classList.add("bg-icons");

    bgWrapper.classList.remove("bg-about");
    bgWrapper.classList.remove("bg-video");
    bgWrapper.classList.remove("bg-contact");
  }
  // video seciton
  if (getScrollPercent() > 38 && getScrollPercent() < 62) {
    animation.classList.add("scrolled-icons");
    animation.style.left = videoPosX;
    animation.style.top = videoPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-middle");
    animation.classList.remove("scrolled-contact");

    bgWrapper.classList.add("bg-video");

    bgWrapper.classList.remove("bg-about");
    bgWrapper.classList.remove("bg-icons");
    bgWrapper.classList.remove("bg-contact");
  }
  // ?middle link
  if (getScrollPercent() > 62 && getScrollPercent() < 74) {
    animation.classList.add("scrolled-middle");

    animation.style.left = middlePosX;
    animation.style.top = middlePosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-contact");

    bgWrapper.classList.remove("bg-about");
    bgWrapper.classList.remove("bg-icons");
    bgWrapper.classList.remove("bg-video");
    bgWrapper.classList.remove("bg-contact");
  }
  //     contact
  if (getScrollPercent() > 74 && getScrollPercent() < 90) {
    animation.classList.add("scrolled-contact");

    animation.style.left = contactPosX;
    animation.style.top = contactPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-middle");

    bgWrapper.classList.add("bg-contact");

    bgWrapper.classList.remove("bg-about");
    bgWrapper.classList.remove("bg-icons");
    bgWrapper.classList.remove("bg-video");
  }
  // bottom
  if (getScrollPercent() > 90) {
    animation.classList.add("scrolled-middle");

    animation.style.left = bottomPosX;
    animation.style.top = bottomPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-contact");

    bgWrapper.classList.remove("bg-about");
    bgWrapper.classList.remove("bg-icons");
    bgWrapper.classList.remove("bg-video");
    bgWrapper.classList.remove("bg-contact");
  }
};

// smooth scroll
// from traversy media
$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      1000
    );
  }
});

// slide in from
const itemsLeft = document.getElementsByClassName("hide-left");
const itemsRight = document.getElementsByClassName("hide-right");
const itemsBottom = document.getElementsByClassName("hide-bottom");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        el.offsetHeight / 2 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function run() {
  for (let i = 0; i < itemsLeft.length; i++) {
    if (isInViewport(itemsLeft[i])) {
      itemsLeft[i].classList.add("show-from-left");
    }
  }
  for (let i = 0; i < itemsRight.length; i++) {
    if (isInViewport(itemsRight[i])) {
      itemsRight[i].classList.add("show-from-right");
    }
  }
  for (let i = 0; i < itemsBottom.length; i++) {
    if (isInViewport(itemsBottom[i])) {
      itemsBottom[i].classList.add("show-from-bottom");
    }
  }
}
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
