import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    axios.get('https://travel-blogs-api.herokuapp.com/blogs/').then(res => {
      const blogEntries = res.data;
      setEntries(blogEntries);
      console.log(entries)
    })
  }, [])

  return (
    <div className="App">
      {entries && entries.map((entry) => (
        <>
          <h1>{entry.title}</h1>
          <p>{entry.blog_text}</p>
          <img src={entry.place_img} height="500px" width="auto" />
        </>
      ))}
    </div>
  );
}

export default App;
