function noBoringZeros(n) {
  let number = n.toString();
  if (number === "0") {
    return n;
  }

  while (number.endsWith("0")) {
    number = number.substring(0, number.length - 1);
  }

  return Number(number);
}
