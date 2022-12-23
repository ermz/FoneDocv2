import './App.css';

import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Card from "./Components/Card"

import smartwatchpic from "./images/smartwatchrepair.png";
import phonepic from "./images/phonerepair.png";
import consolepic from "./images/consolerepair.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Card 
        img={smartwatchpic}
        name="SmartWatch"
        cost="60+"
      />
      <Card 
        img={phonepic}
        name="Phone"
        cost="70+"
      />
      <Card 
        img={consolepic}
        name="Console"
        cost="100+"
      />
    </div>
  );
}

export default App;
