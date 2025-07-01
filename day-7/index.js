const menuBtn = document.querySelector(".toggle-menu");
menuBtn.addEventListener("click", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("active");

  menuBtn.innerHTML = nav.classList.contains("active")
    ? `<i class="fa-solid fa-xmark"></i>`
    : ` <i class="fa-solid fa-bars"></i>`;
});
