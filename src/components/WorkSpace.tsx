import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Note} from "../types/Note";
import {init, set} from "../date/indexeddb";


const WorkSpace = () => {
    const {notes, noteId, setNotes, searchValue, isEdit} = useContext(Context)
    const [note, setNote] = useState<Note | null>(null)
    useEffect(() => {
        note && setNotes(notes.map(n => {
            if (n.id === noteId) {
                return note
            }
            set("notes", note);
            return n
        }))
    }, [note])
    useEffect(() => {
        setNote(notes.find(n => n.id === noteId) || null)
    }, [noteId, notes])
    return (
        <div className={"work-space"}>
            <div>{note?.date.toLocaleString(["en-US"], {
                month: "long",
                year: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "numeric"
            })}</div>
            <>{
                isEdit
                    ?
                    <textarea
                        defaultValue={""}
                        value={note?.text || ""}
                        disabled={!noteId}
                        onChange={e => setNote({...note, text: e.target.value} as Note)}
                    />
                    :
                    <div className={"textarea"}>
                        {searchValue ? note?.text.split(searchValue).map((elm, i, arr) => {
                            return <>{elm}<strong
                                style={{color: "#ffc816"}}>{arr.length !== i + 1 && searchValue}</strong></>;
                        }) : note?.text}
                    </div>
            }</>
        </div>
    );
};

export default WorkSpace;