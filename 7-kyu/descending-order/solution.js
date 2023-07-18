function descendingOrder(n) {
  return Number(
    Array.from(n.toString()).sort().reverse().toString().replaceAll(",", "")
  );
}

module.exports = { descendingOrder };
