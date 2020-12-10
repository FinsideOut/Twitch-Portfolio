const icons = document.getElementsByClassName("random");

function random_spin(e) {
  let i = Math.floor(Math.random() * icons.length);
  console.log(i);
  switch (i) {
    case 0:
      e.target.classList.add("hover-pink");
      break;
    case 1:
      e.target.classList.add("hover-blue");
      break;
    case 2:
      e.target.classList.add("hover-green");
      break;
    case 3:
      e.target.classList.add("hover-yellow");
      break;
  }
}
function clear_class(e) {
  e.target.classList.remove("hover-pink");
  e.target.classList.remove("hover-blue");
  e.target.classList.remove("hover-green");
  e.target.classList.remove("hover-yellow");
}
// WUT?
// for (let i = 0; i < icons.length; i++) {
//   icons[i].addEventListener("mouseover", random_spin(e));
// }
icons[0].addEventListener("mouseover", random_spin);
icons[1].addEventListener("mouseover", random_spin);
icons[2].addEventListener("mouseover", random_spin);
icons[3].addEventListener("mouseover", random_spin);

icons[0].addEventListener("mouseout", clear_class);
icons[1].addEventListener("mouseout", clear_class);
icons[2].addEventListener("mouseout", clear_class);
icons[3].addEventListener("mouseout", clear_class);
