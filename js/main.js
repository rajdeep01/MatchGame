


function myFunction() {
    location.reload();
}

var points = 0;
var score = $("h2");
var card = $(".game li");
card.click(function () {
  
  if ( $(this).hasClass('matched') ) {
    return;
}
  
  /* Toggle flip class */
  $(this).toggleClass("flipped");
  
  /* Get flipped cards */
  var flipped = $(".flipped").not(".matched");
  
  /* at least 2 are flipped */  
  
  if ( flipped.length === 2 ) {
    
    /* Select the first and second cards from the collection */
    var firstCard = flipped.first();
    var secondCard = flipped.last();

    /* Compare to see if collections are equal */
    if ( firstCard.text() === secondCard.text() ) {
      points++;
      score.text("You've found " + points + " matches."); 
      firstCard.addClass("matched");
      secondCard.addClass("matched");
    } else {
      
      setTimeout(function () {
        firstCard.removeClass("flipped");
        secondCard.removeClass("flipped");
    }, 1000);
      
    }
  
    
  }
  
});

