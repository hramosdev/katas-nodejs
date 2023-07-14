function getCount(str) {
  const stringArray = Array.from(str);
  return stringArray.reduce((accumulator, currentValue) => {
    if (
      currentValue === "a" ||
      currentValue === "o" ||
      currentValue === "i" ||
      currentValue === "o" ||
      currentValue === "u"
    ) {
      accumulator++;
    }
    return accumulator;
  }, 0);
}
