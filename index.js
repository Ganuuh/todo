const add = document.querySelector(".add");
const banner = document.querySelector(".list");
const submit = document.querySelector("#submit");
const todo = document.querySelector(".todo");

add.addEventListener("click", () => {
  banner.style.opacity = "1";
  banner.style.zIndex = "1";
  todo.style.opacity = "0.2";
  todo.style.zIndex = "auto";
});
submit.addEventListener("click", () => {
  banner.style.opacity = "0";
  todo.style.zIndex = "1";
  banner.style.zIndex = "auto";
  todo.style.opacity = "1";
});
