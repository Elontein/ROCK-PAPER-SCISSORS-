setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);
 //DOM
 const btnRules = document.querySelector(".rules-btn");
  const btnClose = document.querySelector(".close-btn");
  const modalRules = document.querySelector(".modal");

  btnRules.addEventListener("click", () =>{
    modalRules.classList.toggle("show-modal")
  });
  btnClose.addEventListener("click", () =>{
    modalRules.classList.toggle("show-modal")
  });