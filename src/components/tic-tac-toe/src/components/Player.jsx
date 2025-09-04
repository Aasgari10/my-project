import { useState } from "react";
import classes from "../indext.module.css"

export default function Player({ initialValue, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialValue);

    function handleEditClick() {
        // Toggle editing state
        setIsEditing((prevEditing) => {
            const newEditingState = !prevEditing;
            // If we're saving, call onChangeName
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
        <div className={classes.bigContainer}>
<li className={isActive ? classes.active : undefined}>
            <span className={classes.player}>
                {editablePlayerName}
                <span className={classes.playerSymbol}>{symbol}</span>
            </span>
            <button className={classes.saveBtn} onClick={handleEditClick}>{btnCaption}</button>
        </li>
        </div>
    );
}
