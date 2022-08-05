import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";
let cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const App = () => {
  const [cardsClicked, setCardsClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const clickCard = (e) => {
    e.preventDefault();
    const cardID = parseInt(
      e.currentTarget.children[0].children[1].textContent.split(" ")[1]
    );
    console.log(cardID);
    if (!cardsClicked.includes(cardID)) {
      setCurrentScore(currentScore + 1);
      setCardsClicked(cardsClicked.concat([cardID]));
      shuffleArray(cardNumbers);
    } else {
      setCurrentScore(0);
      setCardsClicked([]);
      shuffleArray(cardNumbers);
    }
  };

  useEffect(() => {
    if (currentScore === 16) {
      console.log("You win!");
      setBestScore(currentScore);
      setCurrentScore(0);
      setCardsClicked([]);
      shuffleArray(cardNumbers);
    } else if (currentScore > bestScore) {
      console.log("New best score!");
      setBestScore(currentScore);
    } else {
      console.log("Keep going!");
    }
  }, [currentScore, bestScore]);

  return (
    <div id="container">
      <div id="header">
        <h1>Memory Cards</h1>
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
        <p>Try to click all the cards, but never twice.</p>
      </div>
      <div id="cardHolder">
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[0]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[1]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[2]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[3]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[4]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[5]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[6]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[7]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[8]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[9]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[10]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[11]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[12]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[13]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[14]} cardDesc="lorem ipsum" />
        </div>
        <div onClick={clickCard}>
          <Card cardName={"Card " + cardNumbers[15]} cardDesc="lorem ipsum" />
        </div>
      </div>
    </div>
  );
};

export default App;
