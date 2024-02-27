import { iIncome } from "./../../scenes/budget/interfaces/income.interface";
export const getJustify = (align: "center" | "left" | "right" | undefined) => {
  let justify = "center";
  switch (align) {
    case "left":
      justify = "start";
      break;
    case "right":
      justify = "end";
      break;
    case "center":
      justify = "center";
      break;
    default:
      justify = "space-between";
  }

  return justify;
};
