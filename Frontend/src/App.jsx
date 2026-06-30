import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  function handleChange(event) {
    setPrompt(event.target.value);
  }
  async function generateResponse() {
    const res = await axios.post(
      "https://mini-gemini-ai-1.onrender.com/generate",
      {
        prompt: prompt,
      },
    );
    setOutput(res.data.response);
  }

  return (
    <div className="container">
      <h1>Mini Gemini</h1>

      <textarea
        value={prompt}
        onChange={handleChange}
        placeholder="Enter your prompt here..."
      />

      <br />

      <button onClick={generateResponse}>Generate Response</button>

      <div className="response-box">
        <h2>Gemini Response:</h2>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default App;
