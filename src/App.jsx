import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  async function handleInput (e){
    e.preventDefault();

    await fetch('http://localhost:3000/post',{
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": 'application/json',
      }
    })
    setTitle('')

  }
  return (
    <div className="App">
      <form onSubmit={handleInput}>
        <label htmlFor="">Title</label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
