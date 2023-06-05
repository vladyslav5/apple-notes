import React, {useEffect, useMemo, useState} from 'react';
import Sidebar from "./Sidebar";
import WorkSpace from "./WorkSpace";
import HeadMenu from "./HeadMenu";
import {Context} from "../index";
import {Note} from "../types/Note";


import {get, getAll, init, set} from "../date/indexeddb";


const App = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [noteId, setNoteId] = useState<string | null>()
    const [isEdit,setIsEdit] = useState<boolean>(false)
    const [searchValue,setSearchValue] = useState<string>("")


    useEffect(() => {
        getAll("notes").then(res => setNotes(res))
    }, [])

    const addHandler = () => {
        const newNote = {text: "new note", isLocked: false, date: new Date()}
        set("notes", newNote as Note).then(res => {
            setNotes([...notes, {...newNote, id: res as string}])
            setNoteId(res as string)
            setIsEdit(true)

        })
    }
    return (
        <Context.Provider value={useMemo(() => ({isEdit,setIsEdit,searchValue,setSearchValue,notes, setNotes, noteId, setNoteId, addHandler}), [notes, isEdit,searchValue,noteId])}>
            {
                useMemo(() => (
                    <div className={"container"}>
                        <HeadMenu/>
                        <Sidebar/>
                        <WorkSpace/>
                    </div>
                ), [])
            }
        </Context.Provider>
    );
};

export default App;