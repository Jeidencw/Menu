let previousScroll = window.pageYOffset;

window.addEventListener("scroll", () => {
  let header = document.querySelector("#header");
  let currentScroll = window.pageYOffset;

  if (currentScroll > previousScroll) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  previousScroll = currentScroll;
});