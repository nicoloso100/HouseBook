export const MONGODB_CONNECTION_STRING =
  "mongodb://root:HouseBook123@localhost:27017/HouseBook?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

export const mongoConfig = {
  database: MONGODB_CONNECTION_STRING,
  dropDatabase: false,
};
