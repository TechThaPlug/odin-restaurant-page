export default function loadContact() {
  const content = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.classList.add("tab", "contact");

  const heading = document.createElement("h1");
  heading.textContent = "Contact";

  const details = [
    ["Address", "123 Oak Street, Nairobi"],
    ["Phone", "+254 700 000 000"],
    ["Email", "hello@emberandoak.example"],
    ["Hours", "Open daily, 11 AM to 10 PM"],
  ];

  contact.appendChild(heading);

  details.forEach(([label, value]) => {
    const row = document.createElement("p");

    const strong = document.createElement("strong");
    strong.textContent = label + ": ";

    row.append(strong, value);
    contact.appendChild(row);
  });

  content.appendChild(contact);
}