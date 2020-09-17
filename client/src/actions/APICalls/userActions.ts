import { HttpRequest } from "./HttpRequest";
import { userURLs } from "./URLs";

export const GetPosts = (user_id: string): Promise<ISummaryPost[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await new HttpRequest().Get<ISummaryPost[]>(
        `${userURLs.getPosts}/${user_id}`
      );
      resolve(request.ok ? request.result : []);
    } catch {
      reject();
    }
  });
};

export const CreatePost = (post: ISendPost): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await new HttpRequest().Post(userURLs.createPost, post);
      resolve();
    } catch {
      reject();
    }
  });
};

export const RemovePost = (id: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await new HttpRequest().Delete(userURLs.deletePost, id);
      resolve();
    } catch {
      reject();
    }
  });
};

export const editPost = (post: ISendPost, id: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await new HttpRequest().Put(userURLs.editPost, id, post);
      resolve();
    } catch {
      reject();
    }
  });
};
