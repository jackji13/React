import './App.css'
import Greeting from "./Greeting";
import Welcome from "./Welcome";
import Counter from "./Counter";
import Form from "./Form";
import React, { useState, useEffect } from 'react';

function App() {
  const your_name = "jay"
  const students = [
		{name: "lily", score: 80},
		{name: "jay", score: 50},
		{name: "kat", score: 85},
	]
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);
  
  return (
    <div>
      <div>
        <Greeting />
        <Greeting />
        <Greeting />
        <Greeting />
        <Greeting />
        
	      <Welcome name="lily" />
	      <Welcome name={your_name} />

        <Counter></Counter>

        <Form></Form>


      <div>
        {students.map((student, index) => (
          <Welcome key={index} name={student.name} score={student.score}/>
        ))}
      </div>

      </div>

      <div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {posts.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>

    </div>
    
  )
}

export default App