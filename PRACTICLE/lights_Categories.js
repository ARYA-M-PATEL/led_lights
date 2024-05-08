const lc_btns = document.querySelector(".lc-btns");
const lc_btn = document.querySelectorAll(".lc-btn");
const lccc_image_elem = document.querySelectorAll(".lccc-image");

lc_btns.addEventListener("click", (e) => {
  const lc_btn_clicked = e.target;
  console.log(lc_btn_clicked);

  lc_btn.forEach((curElem) => curElem.classList.remove("lc_btn-active"));

  lc_btn_clicked.classList.add("lc_btn-active");

  const btn_num = lc_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.lc-btn--${btn_num}`);

  lccc_image_elem.forEach((curElem) =>
    curElem.classList.add("lc-image-not-active")
  );

  img_active.forEach((curElem) =>
    curElem.classList.remove("lc-image-not-active")
  );
});
