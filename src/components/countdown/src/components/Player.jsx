import { useRef , useState } from "react";
import classes from "../numbers.module.css";
export default function Player() {

  const playerName = useRef();

  const [enteredPlayerName , setEnteredPlayerName] = useState(null);

  function handleClick(){
  setEnteredPlayerName(playerName.current.value)
  playerName.current.value = '';
}

  return (
  
    <section id={classes.player}>
      <h2>Welcome {enteredPlayerName ?? 'Body!'}</h2>
      <p>
        <input
         type="text"
         ref={playerName} 
        />
        <button onClick={handleClick}>Set Your Name</button>
      </p>
    </section>
  );
}
