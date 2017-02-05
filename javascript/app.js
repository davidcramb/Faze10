  //1 - 8
  //2 - 8
  //3 - 8
  //4 - 8
  //5 - 8
  //6 - 8
  //7 - 8
  //8 - 8
  //9 - 8
  //10 - 8
  //11 - 8
  //12 - 8
  //W - 8
  //SK - 4
  //total 108
  let deck = [];
  let color = ["RED", "BLUE", "YELLOW", "GREEN"];
  var build_deck = () => {
    for (let i = 1; i <= 12; i++) {
      var cards = [];
      cards.push(Array(8).fill(i));
      cards[0].forEach(function(x, index, array){
        switch (index) {
          case 0:
          case 1:
          cards[0][index] = {card: {value: i, color: "red"}};
          break;
          case 2:
          case 3:
          cards[0][index] = {card: {value: i, color: "blue"}}
          break;
          case 4:
          case 5:
          cards[0][index] = {card: {value: i, color: "green"}}
          break;
          case 6:
          case 7:
          cards[0][index] = {card: {value: i, color: "yellow"}}
          break;
        }
      });
      cards.forEach(pushCardsToDeck);
    };
        console.log(cards)
    };

  var pushCardsToDeck = (element, index, array) =>
  {
    element.forEach(function(card){
      deck.push(card);
    })  };
  
  build_deck();
