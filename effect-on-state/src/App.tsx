import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log(`Message changed: ${message}`);
  }, [message]);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated to ${likes}!`);
    }
  }, [likes]);

  useEffect(() => {
    console.log(`Current color: ${color}`);
  }, [color]);

  const handleMessageChange = () => {
    if (message === "Hello from React!") {
      setMessage("");
      return;
    }
    setMessage("Hello from React!");
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleColorChange = () => {
    setColor(color === "red" ? "green" : "red");
  };

  return (
    <div>
      <h2>Message Logger</h2>
      <button onClick={handleMessageChange}>
        {!message ? "Send Message" : "Clear Message"}
      </button>
      <h3>{message}</h3>

      <h2>Like Counter</h2>
      <h3>{likes}</h3>
      <button onClick={handleLike}>Like</button>

      <h2>Color Box</h2>
      <button onClick={handleColorChange}>Change Color</button>
      <div style={{ width: 400, height: 100, backgroundColor: color }}>
        Color Box
      </div>
    </div>
  );
}

export default App;
