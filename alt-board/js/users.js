function getUsers() {
  $.get("http://localhost:5000/api/users", data => {
    viewModel.users(data);
  });
}

function ViewModel() {
  var self = this;
  self.users = ko.observableArray();
  self.userInputName = ko.observable();

  self.addUser = function() {
    var name = $("#user-name").val();
    var score = 0;
    var date = Date.now();

    self.users.push({
      name,
      score,
      date
    });

    $.ajax({
      url: "http://localhost:5000/api/users",
      data: JSON.stringify({
        name: name,
        score: score,
        date: date
      }),
      type: "POST",
      contentType: "application/json",
      success: function(data) {
        console.log("New User Added");
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  };
}

var viewModel = new ViewModel();

ko.applyBindings(viewModel);
