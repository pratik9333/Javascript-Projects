"use-strict";

const showModalBtns = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = (e) => {
  if (e.type === "click" || (e.type === "keydown" && e.key === "Escape")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

showModalBtns.forEach((button) => {
  button.addEventListener("click", showModal);
});

// click events
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// key events
addEventListener("keydown", closeModal);
