/* eslint-disable no-useless-computed-key */
export const UNITS = {
  ["metric"]: "°C",
  ["standard"]: "K",
  ["imperial"]: "°F",
};
/* eslint-enable no-useless-computed-key */
export type UnitKeys = keyof typeof UNITS;
