import { HttpRequest } from "./HttpRequest";
import { userURLs } from "./URLs";

export const GetPosts = (user_id: string): Promise<IPost[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(user_id);
      const request = await new HttpRequest().Get<IPost[]>(
        `${userURLs.getPosts}/${user_id}`
      );
      console.log(request);
      resolve(request.ok ? request.result : []);
    } catch {
      reject();
    }
  });
};

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
