$(document).ready(function() {
  //Reference arrays and variables
  var checklist = [
  "Reread the instructions", "Checkout the comments", "Look at the console", "Look at the test/case", "Errors in the editor?",  "Read Documentation", "Ask for help from a peer", "Try pair programming"
  ];

  var questionIndex = 0;

  var $continueButton = $(".continue"),
    $contributebutton = $(".contribute"),
    $refreshButton = $(".refresh"),
    $pairButton = $(".pair");

  //Begin interactive form
  $continueButton.click(function(event) {
    event.preventDefault();

    // First click
    if (questionIndex === 0) {
      $(".primary").show();
      $refreshButton.show();
      $continueButton.html("Continue <i class='ion-arrow-right-c'></i>");
    }

    if (questionIndex <= checklist.length - 1) {
      var question = checklist[questionIndex];
      $("#showQuestion").text(question);
      $("ul").append("<li><i class='ion-ios-checkmark-outline'></i> " + question + "</li>");
    }

    // No more questions
    if (questionIndex >= checklist.length - 1) {
      $continueButton.hide();
      $contributebutton.show();
      $pairButton.show();
    }

    questionIndex++;
  });
   $(".ion-close-circled").click(function() {
    $(".butwhy").toggle();
    $(".ion-help-circled").show();
   });

  $(".ion-help-circled").click(function() {
    $(".butwhy").toggle();
    $(".ion-help-circled").hide();
   });

  $(".pair").click(function(){
    window.open("https://gitter.im/FreeCodeCamp/LetsPair",'_blank');
  });

 $(".contribute").click(function(){
    window.open("https://github.com/tommygebru/camperguide",'_blank');
  });

/*     $(".refresh").click(function(){
    window.open("",'_blank');
  });

  */
});
