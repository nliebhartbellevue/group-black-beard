import "bootstrap";
import "@fortawesome/fontawesome-free";
import "./scss/main.scss";

const catTile = document.getElementById("categories");
const cluesOne = document.getElementById("clues1");
const cluesTwo = document.getElementById("clues2");
const cluesFive = document.getElementById("clues5");
const cluesTen = document.getElementById("clues10");
const cluesTwenty = document.getElementById("clues20");

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

const oneHundreds = [
  {
    value: 100,
    answer:
      "The lexical structure is the ____-____ syntax of a language; it specifies such things as what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next."
  },
  {
    value: 100,
    answer:
      "In JavaScript an object is an ______ collection of properties, each of which has a name and a value."
  },
  {
    value: 100,
    answer:
      "JavaScript arrays are a specialized form of JavaScript object, and array _____ are little more than property names that happen to be integers."
  },
  {
    value: 100,
    answer:
      "If a function is assigned to the property of an object, it is known as a ______ of that object."
  },
  {
    value: 100,
    answer:
      "The event ______ is a string that specifies what kind of event occurred."
  }
];

const twoHundreds = [
  {
    value: 200,
    answer: "JavaScript is a ____-sensitive language."
  },
  {
    value: 200,
    answer:
      "This JavaScript object property attribute specifies whether the value of the property can be set."
  },
  {
    value: 200,
    answer:
      "JavaScript arrays are _____-based and use 32-bit indexes: the index of the first element is 0, and the highest possible index is 4294967294 (232-2), for a maximum array size of 4,294,967,295 elements."
  },
  {
    value: 200,
    answer:
      "JavaScript function definitions can be nested within other functions, and they have access to any variables that are in scope where they are defined. This means that JavaScript functions are ______, and it enables important and powerful programming techniques."
  },
  {
    value: 200,
    answer:
      "The event target is the _____ on which the event occurred or with which the event is associated."
  }
];

const fiveHundreds = [
  {
    value: 500,
    answer: "JavaScript ignores spaces that appear between _____ in programs."
  },
  {
    value: 500,
    answer:
      "An object literal is a ___-separated list of colon-separated name:value pairs, enclosed within curly braces."
  },
  {
    value: 500,
    answer:
      "When an array is _____, the length property is greater than the number of elements, and all we can say about it is that length is guaranteed to be larger than the index of every element in the array."
  },
  {
    value: 500,
    answer:
      "Functions defined as an expression are only useful if it is part of a larger expression, such as an assignment or _______, that does something with the newly defined function."
  },
  {
    value: 500,
    answer:
      "The advent of _____-_____ and JavaScript-enabled mobile devices, such as the iPhone, have required the definition of new touch and geture event types."
  }
];

const tenHundreds = [
  {
    value: 1000,
    answer:
      "In JavaScript any text between the characters __ and __ is treated as a comment."
  },
  {
    value: 1000,
    answer:
      "Object.______ is one of the rare objects that has no prototype: it does not inherit any properties."
  },
  {
    value: 1000,
    answer:
      "The array.splice() method alters the _____ property and shifts array elements to higher or lower indexes as needed."
  },
  {
    value: 1000,
    answer: "Any legal JavaScript ______ can be a function name."
  },
  {
    value: 1000,
    answer:
      "The ____ event is fired when a document and all of its external resources are fully loaded and displayed to the user."
  }
];

const twentyHundreds = [
  {
    value: 2000,
    answer:
      "In JavaScript strict mode imposes restrictions on the use of the following identifiers. They are not fully reserved, but they are not allowed as variable, function, or parameter names:"
  },
  {
    value: 2000,
    answer:
      "Accessor properties do not have a writable attribute as data properties do. If a property has both a getter and a setter method, it is a ____/____ property."
  },
  {
    value: 2000,
    answer:
      "JavaScript does not support true multidimensional arrays, but you can approximate them with arrays of _____."
  },
  {
    value: 2000,
    answer:
      "When methods return objects, you can use the return value of one method invocation as part of a subsequent invocation. This results in a series of method invocations as a single expression, known as _____ or ______."
  },
  {
    value: 2000,
    answer:
      "The HTML5 drag-and-drop API allows JavaScript applications to participate in OS-based drag-and-drop operations, transferring data between web applications and native applications. This API defines ____ event types."
  }
];

const showCategories = () => {
  let output = "";
  categories.forEach(category => {
    output += `
            <div class="tile">
                <span>${category.name}</span>
            </div>
        `;
  });

  catTile.innerHTML = output;
};
showCategories();

const showOneHundred = () => {
  let output = "";
  oneHundreds.forEach(oneHundred => {
    output += `
            <div class="tile" onclick="toggleActive(this)">
                <div class="value">$${oneHundred.value}</div>
                <div class="question">${oneHundred.answer}</div>
            </div>
        `;
  });

  cluesOne.innerHTML = output;
};
showOneHundred();

const showTwoHundred = () => {
  let output = "";
  twoHundreds.forEach(twoHundred => {
    output += `
              <div class="tile" onclick="toggleActive(this)">
                  <div class="value">$${twoHundred.value}</div>
                  <div class="question">${twoHundred.answer}</div>
              </div>
          `;
  });

  cluesTwo.innerHTML = output;
};
showTwoHundred();

const showFiveHundred = () => {
  let output = "";
  fiveHundreds.forEach(fiveHundred => {
    output += `
                <div class="tile" onclick="toggleActive(this)">
                    <div class="value">$${fiveHundred.value}</div>
                    <div class="question">${fiveHundred.answer}</div>
                </div>
            `;
  });

  cluesFive.innerHTML = output;
};
showFiveHundred();

const showTenHundred = () => {
  let output = "";
  tenHundreds.forEach(tenHundred => {
    output += `
                  <div class="tile" onclick="toggleActive(this)">
                      <div class="value">$${tenHundred.value}</div>
                      <div class="question">${tenHundred.answer}</div>
                  </div>
              `;
  });

  cluesTen.innerHTML = output;
};
showTenHundred();

const showTwentyHundred = () => {
  let output = "";
  twentyHundreds.forEach(twentyHundred => {
    output += `
                  <div class="tile" onclick="toggleActive(this)">
                      <div class="value">$${twentyHundred.value}</div>
                      <div class="question">${twentyHundred.answer}</div>
                  </div>
              `;
  });

  cluesTwenty.innerHTML = output;
};
showTwentyHundred();
