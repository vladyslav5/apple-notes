import React, {ChangeEvent, ChangeEventHandler, useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {getAll} from "../date/indexeddb";

const SearchBox = () => {
    const {setNoteId, setNotes, searchValue, setSearchValue,setIsEdit} = useContext(Context)
    useEffect(() => {
        getAll("notes").then(res => {
            setNotes(res.filter(note => note.text.includes(searchValue)))
        })
    }, [searchValue])
    const search = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        setIsEdit(false)
    }
    return (
        <div className={"search-box"}>
            <i className={"material-icons"}>search</i>
            <input type={"search"} value={searchValue} placeholder={"Search"} onChange={search}/>
        </div>
    );
};

export default SearchBox;