import MulterGridfsStorage from "multer-gridfs-storage";
import Crypto from "crypto";
import Path from "path";
import multer from "multer";

const storage = new MulterGridfsStorage({
  url: process.env.MONGODB,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      Crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + Path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "Images",
        };
        resolve(fileInfo);
      });
    });
  },
});

export const uploadImage = multer({ storage });
