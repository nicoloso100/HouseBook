export const formatMoney = (value: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
};

export const isNullOrEmpty = (text: string | null | undefined) => {
  return text === undefined || text === null || text === "";
};

export const isInvalidNumber = (number: number | null | undefined) => {
  return number === undefined || number === null;
};
