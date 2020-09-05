"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConfig = exports.MONGODB_CONNECTION_STRING = void 0;
exports.MONGODB_CONNECTION_STRING = "mongodb://root:HouseBook123@ec2-54-197-125-22.compute-1.amazonaws.com:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
exports.mongoConfig = {
    database: exports.MONGODB_CONNECTION_STRING,
    dropDatabase: false,
};
//# sourceMappingURL=contants.js.map