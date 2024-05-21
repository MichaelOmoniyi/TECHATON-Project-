import React, { useState } from "react";

export default function GenerateImage() {
  const [prompt, setPrompt] = useState("");
  const [revisedPrompt, setRevisedPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const main = async () => {
    try {
      const apiBase = process.env.AZURE_OAI_ENDPOINT; // It is advisible to make this environmental variables
      const apiKey = process.env.AZURE_OAI_KEY; // It is advisible to make this environmental variables
      const apiVersion = "2024-02-15-preview";

      const url = `${apiBase}openai/deployments/dalle3/images/generations?api-version=${apiVersion}`;
      const headers = {
        "api-key": apiKey,
        "Content-Type": "application/json",
      };
      const body = JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });
      const responseData = await response.json();

      const revisedPrompt = responseData.data[0].revised_prompt;
      const imageUrl = responseData.data[0].url;

      setRevisedPrompt(revisedPrompt);
      setImageUrl(imageUrl);
    } catch (error) {
      setError(error.message);
      console.error(error);
      window.alert(error.message);
    }
  };

  return null;
}
