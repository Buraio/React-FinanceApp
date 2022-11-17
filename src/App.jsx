import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Header></Header>

      <Form></Form>

    </div>
  )
}

export default App
