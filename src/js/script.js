const scrollDownBtn = document.querySelector(".scroll-down");
const introSections = document.querySelectorAll(".intro");
const introImgs = document.querySelectorAll("img");

scrollDownBtn.addEventListener("click", () =>
  introSections[0].scrollIntoView({ behavior: "smooth" })
);

const lazyLoadClb = function (entry) {
  if (!entry[0].isIntersecting) return;
  const { target } = entry[0];
  target.src = target.dataset.img;
  target.classList.add("show");
  target.parentElement.classList.add("show");
  lazyLoadObserver.unobserve(target);
};

const lazyLoadObserver = new IntersectionObserver(lazyLoadClb, {
  root: null,
  threshold: 0,
});

introImgs.forEach(el => lazyLoadObserver.observe(el));
