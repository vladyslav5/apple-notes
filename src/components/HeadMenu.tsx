import React, {useContext, useState} from 'react';
import Button from "./UI/Button";
import SearchBox from "./SearchBox";
import {Context} from "../index";
import DeleteModal from "./Modals/DeleteModal";
import {del} from "../date/indexeddb";

const HeadMenu = () => {
    const {noteId, setNotes, notes, setNoteId, addHandler, isEdit, setIsEdit} = useContext(Context)
    const [visible, setVisible] = useState<boolean>(false)
    const deleteHandler = () => {
        const keyDelete = localStorage.getItem("delete");
        keyDelete !== "true" && setVisible(true)
        setNotes(notes.filter(n => n.id !== noteId))
        noteId && del("notes", noteId)
        setNoteId(null)
    }
    return (
        <div className={"head-menu"}>
            <DeleteModal active={visible} setActive={setVisible}/>
            <div>
                <Button className={"material-icons"} onClick={addHandler} disabled={false}>add</Button>
                <Button className={"material-icons"} disabled={!noteId} onClick={deleteHandler}>delete_outline</Button>
                <Button className={"material-icons"} disabled={!noteId} onClick={() => setIsEdit(!isEdit)}>edit</Button>
            </div>
            <SearchBox/>
        </div>
    );
};

export default HeadMenu;