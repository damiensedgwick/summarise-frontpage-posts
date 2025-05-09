import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { Post } from "@/types/post";

export const postStore = {
  getPosts: async (posts: Post[]): Promise<Post[]> => {
    try {
      const allPosts = await postStore.getAllPosts();
      return allPosts.filter((p) => posts.some((post) => post.id === p.id));
    } catch (error) {
      console.error("Error getting posts:", error);
      return [];
    }
  },

  // temporary code whilst testing from a csv file, we would look to remove this
  // in place of communicating with the database directly
  getAllPosts: async (): Promise<Post[]> => {
    try {
      const __dirname = path.dirname(fileURLToPath(import.meta.url));
      const csvPath = path.resolve(__dirname, "../..", "posts.csv");
      const data = await fs.promises.readFile(csvPath, "utf-8");
      const lines = data.split("\n").filter(Boolean);

      return lines.slice(1).map((line, index) => {
        const values = line.split(",");
        const post: Post = {
          id: values[0] || String(index),
          url: values[1] || "",
        };
        return post;
      });
    } catch (error) {
      console.error("Error reading posts:", error);
      return [];
    }
  },
};
