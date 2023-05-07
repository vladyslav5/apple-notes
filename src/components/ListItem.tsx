import React, {FC} from 'react';
import {Note} from "./Sidebar";


const ListItem: FC<Note> = ({date, isLocked, text}) => {
    return (
        <li className={"sidebar-item"}>
            <div>{text}</div>
            <div>{date.toLocaleTimeString()}
                <div>{text}</div>
            </div>
            <div>{isLocked.toString()}</div>
        </li>
    );
};

export default ListItem;