export const getTextColor = (condition: string | undefined) => {
  switch (condition) {
    case "lesser":
      return "#FF0000";
    case "greater":
      return "#00dd55";
    default:
      return "#AAAAAA";
  }
};
