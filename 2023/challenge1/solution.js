function findFirstRepeated(gifts) {
    const trobats = [];
    for (let i=0; i < gifts.length;  i++) {
      if (trobats.includes(gifts[i])) return gifts[i]
      trobats.push(gifts[i])
    }
    return -1;
  }