import { HttpRequest } from "./HttpRequest";
import { userURLs } from "./URLs";

export const CreatePost = (post: IPost): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await new HttpRequest().Post(userURLs.createPost, post);
      resolve();
    } catch {
      reject();
    }
  });
};
