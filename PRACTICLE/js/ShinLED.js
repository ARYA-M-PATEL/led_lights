const carousel_1 = document.querySelector(".carousel_1");
const arrowBtns = document.querySelector(".wrapper i");
const firstCardWidth = carousel_1.querySelector(".card").offsetwidth;

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  carousel_1.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel_1.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel_1.scrollLeft = e.pageX;
};

const dragStop = () => {
  isDragging = false;
  carousel_1.classList.remove("dragging");
};
carousel_1.addEventListener("mousemove", dragStart);
carousel_1.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
