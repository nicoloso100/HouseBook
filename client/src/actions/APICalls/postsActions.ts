import { HttpRequest } from "./HttpRequest";
import { postsURLs } from "./URLs";

export const GetFilteredPosts = async (
  filters: ISendFilters
): Promise<ISummaryPost[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await new HttpRequest().Post<ISummaryPost[]>(
        postsURLs.getFilteredPosts,
        filters
      );
      resolve(request.result);
    } catch {
      reject();
    }
  });
};

export const GetPost = async (id: string): Promise<IPost> => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await new HttpRequest().Get<IPost>(
        `${postsURLs.getPost}/${id}`
      );
      resolve(request.result);
    } catch {
      reject();
    }
  });
};
