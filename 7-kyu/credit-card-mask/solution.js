// return masked string
function maskify(cc) {
  const lengthCC = cc.length;
  const mask = cc.substring(0, lengthCC - 4);
  const notmask = cc.substring(lengthCC - 4, lengthCC);
  const lengthMask = mask.length;

  let charactersMask = "";
  for (i = 0; i < lengthMask; i++) {
    charactersMask += "#";
  }

  return charactersMask + notmask;
}
