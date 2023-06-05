import React, {FC, useContext} from 'react';
import {Note} from "../types/Note";
import {Context} from "../index";


const ListItem: FC<Note> = ({date, isLocked, text, id}) => {
    const {noteId, setNoteId} = useContext(Context)
    const selectHandler = () => {
        setNoteId(id)
        if (id === noteId) {
            setNoteId(null)
        }

    }
    return (
        <li className={"sidebar-item " + (noteId === id ? " active" : " ")} onClick={selectHandler}>
            <div className={"strong"}>{text.split("\n")[0]}</div>
            <div className={"additional-text"}>
                <p>{date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</p>
                <p>{text.split("\n")[1] || "No additional text"}</p>
            </div>
        </li>
    );
};

export default ListItem;