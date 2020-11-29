import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function App() {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    axios.get('https://travel-blogs-api.herokuapp.com/blogs/').then(res => {
      const blogEntries = res.data;
      setEntries(blogEntries);
      console.log(entries)
    })
  }, [entries])

  return (
    <div className="bg-black text-white">
      {entries && entries.map((entry) => (
        <>
          <h1>{entry.title}</h1>
          <p>{moment(entry.date_visited).format('MMMM Do YYYY')}</p>
          <p>{entry.blog_text}</p>
          <img src={entry.place_img} height="500px" width="auto" alt={`${entry.title}`}/>
        </>
      ))}
    </div>
  );
}

export default App;
