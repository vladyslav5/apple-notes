import React, {useContext} from 'react';
import ListItem from "./ListItem";
import {Context} from "../index";


const Sidebar = () => {
    const {notes} = useContext(Context)
    return (
        <div className={"sidebar"}>
            {
                notes.map((note,index) => <ListItem key={index} {...note} />)
            }
        </div>
    );
};

export default Sidebar;