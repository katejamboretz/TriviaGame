// Create Trivia Questions as a string

var triviaQuestions =
  "<p>How far can a honey bee fly...</p>" +
  "<div class='section'>" +
  "<input type='radio' name='fly'/>" +
  "<label>100 miles</label>" +
  "<input type='radio' name='fly'/>" +
  "<label>1 mile</label>" +
  "<input type='radio' name='fly'/>" +
  "<label>6 miles</label>" +
  "<input type='radio' name='fly'/>" +
  "<label>15 miles</label>" +
  "</div>" +
  "      <br />" +
  "<p>... and how fast can a honey bee fly?</p>" +
  "<p class=subtle> (Answers courtesy of Bee's Wrap Care product insert.)</p>" +
  "<div class='section'><input type='radio' name='fast'/><label>100 miles per hour</label><input type='radio' name='fast'/><label>1 mile per hour</label><input type='radio' name='fast'/>" +
  "<label>6 miles per hour</label><input type='radio' name='fast'/><label>15 miles per hour</label></div><br />" +
  "<p>Seals and sea lions are the same.</p><div class='section'><input type='radio' name='seal'/><label>True</label>" +
  "<input type='radio' name='seal'/><label>False</label></div><br /><p>What is the tallest tree in the world?</p>" +
  "<p class='subtle'>(Afterwards, check out the ten tallest trees on the treehugger website.)</p>" +
  "<div class='section'><input type='radio' name='tree'/><label>Hyperion</label><input type='radio' name='tree'/>" +
  "<label>Alpine Ash</label><input type='radio' name='tree'/><label>Yellow meranti</label><input type='radio' name='tree'/><label>Doerner Fir</label>";

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
  });
});

// create input events - allow one answer per question

// create boolean for when timer ends

// remove elements from main, replace with times up, as well as number correct, number incorrect, number unanswered
