import React from 'react';
import DropDownMenu from '../components/DropDownMenu';
import "./App.css";

const App = ({colorsList}) => {
  return (
    <div className="App">
      <DropDownMenu colorsList={colorsList}/>
    </div>
  );
};

export default App;
