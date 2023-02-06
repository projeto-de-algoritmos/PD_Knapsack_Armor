export function randomizeGunValue(item) {
  const relationPriceRank = {
    5: {
      min: 23,
      max: 30,
    },
    4: {
      min: 18,
      max: 22,
    },
    3: {
      min: 13,
      max: 17,
    },
    2: {
      min: 8,
      max: 12,
    },
  };

  for (let gun of item) {
    gun["price"] = Math.ceil(
      Math.random() *
        (relationPriceRank[gun["rank"]].max -
          relationPriceRank[gun["rank"]].min) +
        relationPriceRank[gun["rank"]].min
    );
  }

  return item;
}
