import { Post } from "@/types/post";
import { runLLM } from "./llm";

export const runAgent = async (post: Post) => {
  const response = await runLLM(post);

  if (response.content) {
    return response.content;
  }
};
