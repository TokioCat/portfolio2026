document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".header__nav");
  if (!nav) return;

  const navOffsetTop = nav.offsetTop;

  const handleScroll = () => {
    if (window.scrollY >= navOffsetTop) {
      nav.classList.add("is-fixed");
    } else {
      nav.classList.remove("is-fixed");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});
