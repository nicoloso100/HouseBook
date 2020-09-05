export const MONGODB_CONNECTION_STRING =
  "mongodb://root:HouseBook123@ec2-54-197-125-22.compute-1.amazonaws.com:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

export const mongoConfig = {
  database: MONGODB_CONNECTION_STRING,
  dropDatabase: false,
};
