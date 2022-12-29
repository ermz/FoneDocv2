import './App.css';

import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Card from "./Components/Card"

import cardProps from "./card-data.js"

function App() {

  let cardsArray = cardProps.map((cardInfo) => {
    return  <Card 
      img={cardInfo.img}
      name={cardInfo.name}
      cost={cardInfo.cost}
      available={cardInfo.available}
      sale={cardInfo.sale}
    />
  })
  return (
    <div className="App">
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
