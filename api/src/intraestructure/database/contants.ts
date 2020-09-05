export const MONGODB_CONNECTION_STRING = process.env.MONGODB
  ? process.env.MONGODB
  : "";

export const mongoConfig = {
  database: MONGODB_CONNECTION_STRING,
  dropDatabase: false,
};
