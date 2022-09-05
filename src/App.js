import { useState } from 'react';
import './App.css';
import Timer from './components/Timer/index';


function App() {
  const [time,setTime] = useState(0)

  return (
    <div className="App">
      <h1>
        Count Down App
      </h1>
      <input type="number" onChange={(e)=>{setTime(e.target.value)}} placeholder='100'/>
      <Timer time={time} setTime={setTime}/>
    </div>
  );
}

export default App;
