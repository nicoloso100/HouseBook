export const formatMoney = (value: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
};

export const isNullOrEmpty = (text: string) => {
  return text === undefined || text === null || text === "";
};
