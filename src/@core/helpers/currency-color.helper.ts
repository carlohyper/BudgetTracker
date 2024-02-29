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

export const getCurrencyStatus = (
  amount: number,
  actual: number,
  isExpenses = true
) => {
  if (isExpenses) {
    return amount === actual
      ? "equal"
      : !!amount && actual! >= 0 && amount > actual!
      ? "greater"
      : "lesser";
  } else {
    return amount === actual
      ? "equal"
      : !!amount && actual! >= 0 && actual! > amount
      ? "greater"
      : "lesser";
  }
};
