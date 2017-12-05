$(function() {
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', 'jack', 'queen', 'king'];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      var card = $('#deck').add('<div class="card bg-light">' + '<div class="card-body"><h4 class="card-title">' + rank + ' of ' + suit + '</h4></p></div></div>');
      $('#deck').append(card);

    });
  });
});
