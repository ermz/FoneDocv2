import './App.css';

import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Card from "./Components/Card"
import Header from "./Components/Header"
import Generator from "./Components/Generator"

import cardProps from "./card-data.js"

function App() {

  let cardsArray = cardProps.map((cardInfo) => {
    return  <Card
      {...cardInfo}
    />
  })
  return (
    <div className="App">
      <Header />
      <Generator />
      <div className="banner">
        <Nav />
        <Main />
      </div>
      <section className="cards-list">
        {cardsArray}
      </section>
      
    </div>
  );
}

export default App;
