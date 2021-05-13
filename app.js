const burger = document.querySelector(".burger");

const navigation = document.querySelector(".links");

burger.addEventListener("click", () => {
  //  toggle buttons
  burger.classList.toggle("close");
  navigation.classList.toggle("nav-active");
});
