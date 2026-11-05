import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("nav button");

const tabs = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

function showTab(name) {
  content.replaceChildren();
  tabs[name]();

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === name);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showTab(button.dataset.tab));
});

showTab("home");