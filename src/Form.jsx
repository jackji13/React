import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAdd = () => {
    if (name.trim() && age.trim()) {
      setEntries([...entries, { name, age }]);
      setName('');
      setAge('');
    }
  };
  
  const handleName = e => {
	  setName(e.target.value)
  }
  
  const handleAge = e => {
	  setAge(e.target.value)
  }
 
  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleName}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={handleAge}
          />
        </label>
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>

      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.name} is {entry.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;