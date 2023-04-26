
import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [inp, setin] = useState('');
  const[name,setname] = useState('')
  function submt(e) {
    e.preventDefault();
     setname(inp)
    setin('');
   
  }
  return (
    <div className="App">
      {
        !name?(<form onSubmit={submt } className='name'>
        <input placeholder='Please Enter your name..' type='text' value={inp} onChange={(e) => setin(e.target.value
          )}>
            
          </input>
    <h5>Click Enter on the keyboard </h5>
      </form>):(<Card name={ name} />)
      }
      
    </div>
  );
}

export default App;
