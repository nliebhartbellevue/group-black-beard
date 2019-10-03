let user;
const signin = document.getElementById("signIn");
const board = document.getElementById("mainBoard");
const userform = document.getElementById("user_form");
const username = document.getElementById("user-name");
const mainsidebar = document.getElementById("mainSidebar");
const leaderboard = document.getElementById("lBContainer");

const toggleActive = e => {
  if (e.className == "tile active") {
    e.className = "tile";
  } else {
    e.className = "tile active";
  }
};

// Close Signin Overlay && Open Board
const closeWin = () => {
  signin.style.width = "0%";
  board.style.width = "100%";
  user = "Guest";
  console.log(user);
};

// Handle form submission
userform.addEventListener("submit", e => {
  e.preventDefault();
  if (username.value === "") {
    user = "Guest";
  } else {
    user = username.value;
  }

  console.log(user);
  openBoard();
});

// Open board
const openBoard = () => {
  signin.style.width = "0%";
  board.style.width = "100%";
};

// Sidebar toggle change
const hamburgerFunc = x => {
  x.classList.toggle("change");
  toggleSide();
  if (leaderboard.style.visibility == "visible") {
    leaderboard.style.visibility = "hidden";
  } else {
    leaderboard.style.visibility = "visible";
  }
};

// Leader Board
document.addEventListener("DOMContentLoaded", () => {
  let elements = [];
  // Add each row to the elements array
  leaderboard.querySelectorAll(".row").forEach(el => elements.push(el));
  // clear the leaderboard
  leaderboard.innerHTML = "";
  // Sort the elements array from highest to lowest
  elements.sort(
    (a, b) =>
      b.querySelector(".score").textContent -
      a.querySelector(".score").textContent
  );
  // Put elements back into leaderboard
  elements.forEach(e => leaderboard.appendChild(e));
});

// Sidebar toggle sidebar
const toggleSide = () => {
  mainsidebar.classList.toggle("openSide");
};

//start knockout work//
function JeopardyViewModel() {
  var self = this;
  self.chosenQuestion = ko.observable();
}
