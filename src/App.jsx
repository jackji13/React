import './App.css'
import Greeting from "./Greeting";
import Welcome from "./Welcome";
import Counter from "./Counter";
import Form from "./Form";

function App() {
  const your_name = "jay"
  const students = [
		{name: "lily", score: 80},
		{name: "jay", score: 50},
		{name: "kat", score: 85},
	]
  
  return (
    <>
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

    </>
  )
}

export default App
