/**
 * Converts a Uint8Array to a hex string
 */
export const getHexstring = (uArray: Uint8Array) => {
  return [...uArray]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .padStart(uArray.length * 2, "0");
};
