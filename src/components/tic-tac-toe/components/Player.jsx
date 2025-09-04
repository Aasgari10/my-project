import { useState } from "react";
import classes from '../indextic.module.css'


export default function Player({ initialValue, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialValue);

    function handleEditClick() {
        setIsEditing((prevEditing) => {
            const newEditingState = !prevEditing;
            if (newEditingState) {
                return newEditingState; // Just toggle
            } else {
                onChangeName(symbol, playerName); // Call onChangeName when saving
                return newEditingState; // Return the new state
            }
        });
    }

    function keyHandler(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className={classes.playerName}>{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" onChange={keyHandler} required value={playerName} />;
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? classes.active : undefined}>
            <span className={classes.player}>
                {editablePlayerName}
                <span className={classes.playerSymbol}>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}
