import { useCallback, useEffect, useState } from "react";

// components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// styles
import "./App.css";

// data
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(category, word);

    return { category, word };
  }, [words]);

  //starts the secrets word game
  const startGame = () => {
    // pick word and pick category
    const {word, category} = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(category, word);
    console.log(wordLetters);

    // fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return(
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
