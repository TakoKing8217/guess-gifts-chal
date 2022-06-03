var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
  { name: "Lego Ship", size: "large", clatters: "yes", weight: "light" },
  { name: "Nerf Gun", size: "medium", clatters: "yes", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
  { size: "large", clatters: "yes", weight: "light" },
];

const guessGifts = (list, pres) => {
  guesses = [];
  for (let i = 0; i < pres.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (
        pres[i].size === list[j].size &&
        pres[i].clatters === list[j].clatters &&
        pres[i].weight === list[j].weight
      ) {
        guesses.push(list[j].name);
      }
    }
  }
  return guesses;
};

console.log(
  guessGifts(wishlist, presents),
  "should be ['Toy Car', 'Mini Puzzle', 'Lego Ship']"
);
// guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]
