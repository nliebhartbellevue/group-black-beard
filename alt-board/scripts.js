//start knockout work//

//QuestionTile constructor//

function QuestionTile(question, choice1, choice2, choice3, choice4, answer, value) {
  this.Question = question;
  this.Choice1 = choice1;
  this.Choice2 = choice2;
  this.Choice3 = choice3;
  this.Choice4 = choice4;
  this.Answer = answer;
  this.Value = value;
};

//array of questions to be displayed//

var questionList = [
  new QuestionTile("Question1", "Choice A", "Choice B", "Choice C", "Choice D", "Answer1", 100),
  new QuestionTile("Question2", "Choice A", "Choice B", "Choice C", "Choice D", "Answer2", 200),
  new QuestionTile("Question3", "Choice A", "Choice B", "Choice C", "Choice D", "Answer3", 300),
  new QuestionTile("Question4", "Choice A", "Choice B", "Choice C", "Choice D", "Answer4", 400),
  new QuestionTile("Question5", "Choice A", "Choice B", "Choice C", "Choice D", "Answer5", 500),
  new QuestionTile("Question6", "Choice A", "Choice B", "Choice C", "Choice D", "Answer6", 100),
  new QuestionTile("Question7", "Choice A", "Choice B", "Choice C", "Choice D", "Answer7", 200),
  new QuestionTile("Question8", "Choice A", "Choice B", "Choice C", "Choice D", "Answer8", 300),
  new QuestionTile("Question9", "Choice A", "Choice B", "Choice C", "Choice D", "Answer9", 400),
  new QuestionTile("Question10", "Choice A", "Choice B", "Choice C", "Choice D", "Answer10", 500),
  new QuestionTile("Question11", "Choice A", "Choice B", "Choice C", "Choice D", "Answer11", 100),
  new QuestionTile("Question12", "Choice A", "Choice B", "Choice C", "Choice D", "Answer12", 200),
  new QuestionTile("Question13", "Choice A", "Choice B", "Choice C", "Choice D", "Answer13", 300),
  new QuestionTile("Question14", "Choice A", "Choice B", "Choice C", "Choice D", "Answer14", 400),
  new QuestionTile("Question15", "Choice A", "Choice B", "Choice C", "Choice D", "Answer15", 500),
  new QuestionTile("Question16", "Choice A", "Choice B", "Choice C", "Choice D", "Answer16", 100),
  new QuestionTile("Question17", "Choice A", "Choice B", "Choice C", "Choice D", "Answer17", 200),
  new QuestionTile("Question18", "Choice A", "Choice B", "Choice C", "Choice D", "Answer18", 300),
  new QuestionTile("Question19", "Choice A", "Choice B", "Choice C", "Choice D", "Answer19", 400),
  new QuestionTile("Question20", "Choice A", "Choice B", "Choice C", "Choice D", "Answer20", 500),
  new QuestionTile("Question21", "Choice A", "Choice B", "Choice C", "Choice D", "Answer21", 100),
  new QuestionTile("Question22", "Choice A", "Choice B", "Choice C", "Choice D", "Answer22", 200),
  new QuestionTile("Question23", "Choice A", "Choice B", "Choice C", "Choice D", "Answer23", 300),
  new QuestionTile("Question24", "Choice A", "Choice B", "Choice C", "Choice D", "Answer24", 400),
  new QuestionTile("Question25", "Choice A", "Choice B", "Choice C", "Choice D", "Answer25", 500),
];

//View Model//

function JeopardyViewModel() {
  var self = this;
  self.Player = ko.observable("");
  self.Question = ko.observable("");
  self.Choice1 = ko.observable("");
  self.Choice2 = ko.observable("");
  self.Choice3 = ko.observable("");
  self.Choice4 = ko.observable("");
  self.Answer = ko.observable("");
  self.Value = ko.observable("");

  var QuestionTile = {
    Question: self.Question,
    Choice1: self.Choice1,
    Choice2: self.Choice2,
    Choice3: self.Choice3,
    Choice4: self.Choice4,
    Answer: self.Answer,
    Value: self.Value
  };

  self.QuestionTile = ko.observable();
  self.QuestionTiles = ko.observableArray(questionList);
  self.FinalScore = ko.observableArray([""]);

  //add points to FinalScore array//

  self.score = function() {
    self.FinalScore.push(QuestionTile(value));
  };

  //open function for question tile to open and display window with question//

  self.open = function(QuestionTile) {
    self.QuestionTile(QuestionTile);
  };

  //return to tile page after question is answered//

  self.return = function() {
    self.QuestionTile(null);
  };

  //used for if correct answer is selected//

  self.correct = function(Answer) {
    self.Answer(Answer);
    self.score("");
  };

  //used for if incorrect answer is selected//

  self.incorrect = function(Answer) {
    self.Answer(Answer);
  };
};

ko.applyBindings(new JeopardyViewModel());