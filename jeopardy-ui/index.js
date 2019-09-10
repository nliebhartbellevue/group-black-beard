import "bootstrap";
import "@fortawesome/fontawesome-free";
import "./scss/main.scss";

const categories = [
  {
    id: 1,
    name: "Lexical Structure"
  },
  {
    id: 2,
    name: "Objects"
  },
  {
    id: 3,
    name: "Arrays"
  },
  {
    id: 4,
    name: "Functions"
  },
  {
    id: 5,
    name: "Handling Events"
  }
];

const cat = () => {
  let output = "";
  var catTile = document.getElementById("categories");
  categories.forEach(category => {
    output += `
        <div class="tile">${category.name}</div>
      `;
  });

  catTile.innerHTML = output;
};

cat();
