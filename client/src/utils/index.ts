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

export const isInvalidEmail = (email: string) => {
  const result = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  return !result;
};
