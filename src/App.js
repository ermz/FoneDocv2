import './App.css';

import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Card from "./Components/Card"

import smartwatchpic from "./images/smartwatchrepair.png";
import phonepic from "./images/phonerepair.png";
import consolepic from "./images/consolerepair.png";

function App() {
  let cardProps = [
    {
      img: smartwatchpic,
      name: "SmartWatch",
      cost: "60+"
    },
    {
      img: phonepic,
      name: "Phone",
      cost: "70+"
    },
    {
      img: consolepic,
      name: "Console",
      cost: "100+"
    }
  ]

  let cardsArray = cardProps.map((cardInfo) => {
    return  <Card 
      img={cardInfo.img}
      name={cardInfo.name}
      cost={cardInfo.cost}
    />
  })
  return (
    <div className="App">
      <div className="banner">
        <Nav />
        <Main />
      </div>
      {cardsArray}
      
    </div>
  );
}

export default App;
