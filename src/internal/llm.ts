import { openai } from "./ai";
import { prompt } from "./prompt";

import { Post } from "@/types/post";

export const runLLM = async (post: Post) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.1,
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: post.url },
    ],
  });

  return response.choices[0].message;
};
