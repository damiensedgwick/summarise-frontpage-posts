import { Request, Response } from "express";

import { postStore } from "@/stores/post";
import { runAgent } from "@/internal/agent";

export const summariseHandler = {
  summarisePosts: async (req: Request, res: Response) => {
    try {
      const { posts } = req.body;

      if (!posts || !Array.isArray(posts) || posts.length === 0) {
        return res
          .status(400)
          .json({ error: "Valid array of posts is required" });
      }

      const fetchedPosts = await postStore.getPosts(posts);

      let summaries: {
        postId: string;
        url: string;
        summary: string;
      }[] = [];

      for (const post of fetchedPosts) {
        const agentResponse = await runAgent(post);
        if (agentResponse) {
          summaries.push({
            postId: post.id,
            url: post.url,
            summary: agentResponse,
          });
        }
      }

      return res.status(200).json({
        success: true,
        data: {
          summaries: summaries,
        },
      });
    } catch (error) {
      console.error("Error summarizing posts:", error);
      return res.status(500).json({ error: "Failed to summarise posts" });
    }
  },
};
