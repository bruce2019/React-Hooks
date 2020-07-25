import React from 'react';
import './App.css';
import Counter from './Counter'
import CounterWithHooks from './CounterWithHooks'
import Greeting from './Greeting'
import GreetingWithHooks from './GreetingWithHooks'

function App() {
  return (
    <div>
    {//}<Counter />
    }
    <CounterWithHooks />
    {//<GreetingWithHooks />
    }
    <Greeting />
    </div>
  );
}

export default App;
