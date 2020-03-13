import React from 'react';
import './App.css';
import { DateTime } from 'luxon';

import Spinner from './components/UI/Spinner/Spinner';

const when = DateTime.local().plus({ days: 1 }).toFormat('ss/mm/hh/dd/MM/yyyy');
console.log(when)
function App() {
  return (
    <div className="App">
      <h1>corona</h1>
      <Spinner />
    </div>
  );
}

export default App;
