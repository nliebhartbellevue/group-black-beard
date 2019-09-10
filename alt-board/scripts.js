const toggleActive = e => {
  if (e.className == "tile active") {
    e.className = "tile";
  } else {
    e.className = "tile active";
  }
};

//start knockout work//
function JeopardyViewModel() {
  var self=this;
  self.chosenQuestion = ko.observable();
}