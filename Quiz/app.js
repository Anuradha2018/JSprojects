function populate() {
  if(quiz.isEnded()) {
      showScores();
      

  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
      
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;

};

// create questions
var questions = [
  new Question("Which of these is the main way that ocean tides are created?" , ["The rotation of the Earth on its axis","The gravitational pull of the moon", "The gravitational pull of the sun","None of these"], "The gravitational pull of the moon"),
  new Question("What does a light-year measure?" , ["Brightness","Time","Distance","Weight"],"Distance" ),
  new Question("The loudness of a sound is determined by what property of a sound wave?", ["frequency", "Wavelength","Velocity or rate of change", "Amplitude or height"], "Amplitude or height"),
  new Question("Which of these elements is needed to make nuclear energy and nuclear weapons?", ["Sodium Chloride", "Uranium", "Nitrogen" , "Carbon Dioxide"], "Uranium"),
  new Question("Which of these terms is defined as the study of how the positions of stars and planets can influence human behavior?", ["Astrology","Alchemy","Astronomy","Meterology"], "Astrology")
];
// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


