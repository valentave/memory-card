import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../style/App.css'
import InitialWindow from './InitialWindow'
import GameWindow from './GameWindow';
import ResultWindow from './ResultWindow';

function App() {
  
  const [displayInitial, setDisplayInitial] = useState(true);
  const [displayGame, setDisplayGame] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const [fetchedPokemon, setFetchedPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [result, setResult] = useState(0); // 0 -> You Lost! / 1 -> You Won!
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState(-1); // 0 -> easy / 1 -> medium / 2 -> hard

  // Function that generate a list of unique random numbers
  // INT -> ARRAY
  function generateRandomNumbers(max) {
    const randomNumbers = new Set();
    while (randomNumbers.size < max) {
      const number = Math.floor(Math.random() * 1017) + 1;
      randomNumbers.add(number);
    }
  
    return Array.from(randomNumbers);
  }

  // Fetch a new list of pokemon every time difficulty state is changed
  useEffect(() => {
    if(difficulty !== -2) {
      let cards;
      if (difficulty === 0) cards = 5;
      else if (difficulty === 1) cards = 10;
      else if (difficulty === 2) cards = 20;

      const numbers = generateRandomNumbers(cards);
      const promises = [];

      setFetchedPokemon([]);
      for (let i = 0; i < cards; i++) {
        promises.push(
          fetch("https://pokeapi.co/api/v2/pokemon/" + numbers[i])
            .then((response) => response.json())
            .then((pokemon) => {
              return { name: pokemon.name, sprite: pokemon.sprites.front_default, id: uuidv4() };
            })
        );
      }

      Promise.all(promises)
      .then((pokemons) => {
        setFetchedPokemon(pokemons);
      })
      .catch((error) => {
        console.error("Error al cargar los Pokémon:", error);
      });
    }

  }, [difficulty]);

  // Function to define the difficulty of the game
  // EVENT -> setDifficulty(INT)
  function chooseDifficulty(e) {
    const difficultyName = e.target.textContent;
    
    if (difficultyName === "Easy") setDifficulty(0);
    else if (difficultyName === "Medium") setDifficulty(1);
    else setDifficulty(2);
    setDisplayInitial(false);
    
    setDisplayGame(true);
  }

  // Function to return initial window
  // EVENT -> reset states
  function backHome() {
    setDisplayGame(false);
    setDifficulty(-2);
    setDisplayInitial(true);
    setScore(0);
    setDisplayResult(false);
  }

  // Function to shuffle an array
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // Function to interact with cards
  function onClickCard(e) {
    let target = e.target;
    let name = target.getAttribute("name") ? target.getAttribute("name"): target.parentNode.getAttribute("name");
    if (clickedPokemon.includes(name)) {
      if (bestScore < score) {
        setBestScore(score);
      }
      setDifficulty(-2);
      setClickedPokemon([]);
      setResult(0);
      setDisplayGame(false);
      setDisplayResult(true);
    } else {
      setClickedPokemon([...clickedPokemon, name]);
      setScore(score + 1);
      
      const shuffled = [...fetchedPokemon];
      shuffle(shuffled);
      setFetchedPokemon([...shuffled])      
    }
  }

  useEffect(() => {
    if (difficulty === 0) {
      if (score === 5) {
        setResult(1); 
        setDisplayResult(true);
        setDifficulty(-2);
        setClickedPokemon([]);
        setDisplayGame(false);
        if (bestScore < score) {
          setBestScore(score);
        }
      }
    } else if (difficulty === 1) {
      if (score === 10) {
        setResult(1);
        setDisplayResult(true);
        setDifficulty(-2);
        setClickedPokemon([]);
        setDisplayGame(false);
        if (bestScore < score) {
          setBestScore(score);
        }
      }
    } else if (difficulty === 2) {
      if (score === 20) {
        setResult(1);
        setDisplayResult(true);
        setDifficulty(-2);
        setClickedPokemon([]);
        setDisplayGame(false);
        if (bestScore < score) {
          setBestScore(score);
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <>
    {displayInitial && <InitialWindow 
      onClick = {chooseDifficulty} 
      />}
    {displayGame && <GameWindow 
      backHome = {backHome}
      pokemons = {fetchedPokemon}
      onClickCard = {onClickCard}
      score = {score}
      bestScore = {bestScore}
      />}
    {displayResult && <ResultWindow 
      result = {result}
      backHome = {backHome}
    />}
    </>
  )
}

export default App
