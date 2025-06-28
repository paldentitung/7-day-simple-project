const menuBtn = document.querySelector(".humburger-toggle");
menuBtn.addEventListener("click", () => {
  console.log("clicked");
  let header = document.querySelector("header");
  header.classList.toggle("active");
});
const link = document.querySelectorAll("header a");
console.log(link);
link.forEach((a) => {
  a.addEventListener("click", () => {
    link.forEach((e) => {
      e.classList.remove("active");
    });
    a.classList.add("active");
  });
});
