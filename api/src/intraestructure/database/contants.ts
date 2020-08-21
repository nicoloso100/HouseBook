export const MONGODB_CONNECTION_STRING =
  "mongodb://root:HouseBook123@localhost/HouseBook?authSource=admin";

export const mongoConfig = {
  database: MONGODB_CONNECTION_STRING,
  dropDatabase: false,
};
