const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeBtn");
const modalImg = document.getElementById("modal-img");
const downloadBtn = document.getElementById("downloadImg")
console.log(images);
console.log(modal);
console.log(closeModalBtn);
console.log(modalImg);

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
modalImg.src = img.src;
  });
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
downloadBtn.addEventListener("click",()=>{
    const link = document.createElement("a");
    link.href= modalImg.src;
    link.download=`dowloaded-${modalImg}.jpg`;
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
      modal.style.display = "none";  
})
