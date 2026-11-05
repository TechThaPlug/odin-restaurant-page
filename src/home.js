export default function loadHome() {
  const content = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("tab", "home");

  const title = document.createElement("h1");
  title.textContent = "Ember & Oak";

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Wood-fired cooking in the heart of the city.";

  const about = document.createElement("p");
  about.textContent =
    "Every dish is cooked over open flame using local ingredients. " +
    "Come hungry, stay for the stories, and leave with a full heart.";

  const hours = document.createElement("p");
  hours.classList.add("hours");
  hours.textContent = "Open daily, 11 AM to 10 PM";

  home.append(title, tagline, about, hours);
  content.appendChild(home);
}