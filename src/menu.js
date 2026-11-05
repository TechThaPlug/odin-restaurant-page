const dishes = [
  { name: "Smoked Tomato Soup", description: "Slow-roasted tomatoes with basil oil.", price: "$8" },
  { name: "Oak-Fired Flatbread", description: "Goat cheese, honey, and thyme.", price: "$12" },
  { name: "Grilled Ribeye", description: "Served with charred greens and herb butter.", price: "$28" },
  { name: "Wild Mushroom Risotto", description: "Creamy and finished with parmesan.", price: "$18" },
  { name: "Burnt Honey Cheesecake", description: "Topped with seasonal fruit.", price: "$9" },
];

export default function loadMenu() {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("tab", "menu");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  menu.appendChild(heading);

  dishes.forEach((dish) => {
    const item = document.createElement("div");
    item.classList.add("dish");

    const name = document.createElement("h2");
    name.textContent = dish.name;

    const description = document.createElement("p");
    description.textContent = dish.description;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = dish.price;

    item.append(name, description, price);
    menu.appendChild(item);
  });

  content.appendChild(menu);
}