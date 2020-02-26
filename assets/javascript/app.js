// Declare variables to count responses

var correct = 0;
var incorrect = 0;
var unanswered = 4;

// Create Trivia Questions as a string

var triviaQuestions =
  "<p>How far can a honey bee fly...</p>" +
  "<div class='section'>" +
  "<input type='radio' name='fly' value='no'/>" +
  "<label>100 miles</label>" +
  "<input type='radio' name='fly' value='no'/>" +
  "<label>1 mile</label>" +
  "<input type='radio' name='fly' value='yes'/>" +
  "<label>6 miles</label>" +
  "<input type='radio' name='fly' value='no'/>" +
  "<label>15 miles</label>" +
  "</div>" +
  "      <br />" +
  "<p>... and how fast can a honey bee fly?</p>" +
  "<p class=subtle> (Answers courtesy of Bee's Wrap Care product insert.)</p>" +
  "<div class='section'><input type='radio' name='fast' value='no'/><label>100 miles per hour</label><input type='radio' name='fast' value='no'/><label>1 mile per hour</label><input type='radio' name='fast' value='no'/>" +
  "<label>6 miles per hour</label><input type='radio' name='fast' value='yes'/><label>15 miles per hour</label></div><br />" +
  "<p>Seals and sea lions are the same species.</p><div class='section'><input type='radio' name='seal' value='yes'/><label>True</label>" +
  "<input type='radio' name='seal' value='no'/><label>False</label></div><br /><p>What is the tallest tree in the world?</p>" +
  "<p class='subtle'>(Afterwards, check out the ten tallest trees on the treehugger website.)</p>" +
  "<div class='section'><input type='radio' name='tree' value='yes'/><label>Hyperion</label><input type='radio' name='tree' value='no'/>" +
  "<label>Alpine Ash</label><input type='radio' name='tree' value='no'/><label>Yellow meranti</label><input type='radio' name='tree' value='no'/><label>Doerner Fir</label>";

// load document, add start button
$(document).ready(function() {
  $("#main").empty();
  $("#main").append("<div class = button id='start'>Start</div>");
  console.log("document is ready");

  // if you click start button, start timer

  // append html elements into main div

  // create "done" button

  $("#start").on("click", function() {
    $("#main").empty();
    console.log("game started");
    $("#main").html(triviaQuestions);
    $("#main").append("<div class = 'button' id='done'>Done</div>");

    // if "done" button clicked, replace with "Your done!" and number correct, number incorrect, number unanswered
    // not working right now....
  });

  $("#done").on("click", function() {
    console.log("game ended");
    $("#main").empty();
    $("#main").append("<p>You're done!</p>");
    $("#main").append("Correct: " + correct);
    $("#main").append("Incorrect: " + incorrect);
    $("#main").append("Unanswered: " + unans);
  });
});

// create input events - allow one answer per question

// create boolean for when timer ends

// remove elements from main, replace with times up, as well as number correct, number incorrect, number unanswered
