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
    for (let i = 1; i <= 1; i++) {
      var cards = [];
      cards.push(Array(8).fill(i));

      cards[0].forEach(function(x, index, array){
        x[index] = "3";
        console.log("index", index)
        console.log("x", x);
        console.log("x index", x[index]);
        console.log("index x", index[x]);
      })
      console.log(cards)
      // cards.fill({card:{value:i, color: "red"}});
      // cards.fill.call({})
      // console.log(cards)
      // cards.forEach(pushCardsToDeck);
    };
};
  var pushCardsToDeck = (element, index, array) =>
  {
    element.forEach(function(card){
      deck.push(card);
    })  };
  
  build_deck();
