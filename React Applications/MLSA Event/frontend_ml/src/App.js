import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [revisedPrompt, setRevisedPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [showImage, setShowImage] = useState(false);

  const main = async () => {
    setShowImage(true);
    try {
      const apiBase = process.env.REACT_APP_API_BASE;
      const apiKey = process.env.REACT_APP_API_KEY;
      const apiVersion = process.env.REACT_APP_API_VERSION;

      const url =
        `${apiBase}openai/deployments/dalle3/images/generations?api-version=${apiVersion}`;
      const headers = {
        "api-key": `${apiKey}`,
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
      console.log("responseData: ", responseData);
      const revisedPrompt = responseData.data[0].revised_prompt;
      const imageUrl = responseData.data[0].url;

      setRevisedPrompt(revisedPrompt);
      setImageUrl(imageUrl);
    } catch (error) {
      setError(error.message);
      console.error(error);
      window.alert(error);
    }
  };

  const handleGenerateImage = async (e) => {
    e.preventDefault();
    await main();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Generator</h1>
      </header>
      <div className="imageGenerator">
        {showImage ? (
          <img src={imageUrl} alt="" />
        ) : (
          <p className="promptWait">{!imageUrl ? null : "Generating..."}</p>
        )}
        <form action="">
          <input
            type="text"
            value={prompt}
            placeholder="Enter prompt..."
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" onClick={handleGenerateImage}>
            Prompt
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
