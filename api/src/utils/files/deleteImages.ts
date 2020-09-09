import { gridFsBucket } from "../../intraestructure/database/config";
import mongoose from "mongoose";

export const deleteImages = async (filenames: string[]): Promise<boolean> => {
  let result = true;
  const images = await gridFsBucket
    .find({ filename: { $in: filenames } })
    .toArray();
  const ids = images.map((image: any) => image._id);
  await ids.forEach(async (id: string) => {
    await gridFsBucket.delete(
      new mongoose.Types.ObjectId(id),
      (err: any, data: any) => {
        if (err) {
          result = false;
        }
      }
    );
  });
  return result;
};
