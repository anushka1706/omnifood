const navBtn = document.querySelector(".nav-btn-icon");
const header = document.querySelector(".header");
navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const hrefEle = document.querySelector(href);
      hrefEle.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (link.classList.contains("nav-li-a")) {
      header.classList.toggle("nav-open");
    }
  });
});
const entry = new IntersectionObserver(function (entries) {
  console.log(entries);
});

const sectionHero = document.querySelector(".hero-section");
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }
  if (ent.isIntersecting) {
    document.body.classList.remove("sticky");
  }
}, obsOptions);

obs.observe(sectionHero);
