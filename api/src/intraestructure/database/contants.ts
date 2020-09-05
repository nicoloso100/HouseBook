const MONGODB_CONNECTION_STRING =
  process.env.MONGODB ?? "No se ha podido obtener";

export const mongoConfig = {
  database: MONGODB_CONNECTION_STRING,
  dropDatabase: false,
};
