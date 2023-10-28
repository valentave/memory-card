import { useState } from 'react';
import '../style/App.css'
import InitialWindow from './InitialWindow'

function App() {

  const [displayInitial, setDisplayInitial] = useState(true);
  // 0 -> easy / 1 -> medium. / 2 -> hard
  let difficulty = 0; 

  function chooseDifficulty(e) {
    const difficultyName = e.target.textContent;
    
    if (difficultyName === "Easy") difficulty = 0;
    else if (difficultyName === "Medium") difficulty = 1;
    else difficulty = 2;
    console.log(difficultyName)
    setDisplayInitial(false);
  }

  return (
    <>
    {displayInitial && <InitialWindow onClick = {chooseDifficulty}/>}
    </>
  )
}

export default App
