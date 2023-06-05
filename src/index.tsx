import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import {createContext} from "react";
import {Note} from "./types/Note";

interface contextValue {
    notes: Note[]
    setNotes: (notes: Note[]) => void,
    noteId?: string | null,
    setNoteId: (noteId: string | null) => void,
    addHandler: () => void,
    searchValue: string,
    setSearchValue: (value: string) => void
    isEdit:boolean
    setIsEdit:(value:boolean)=>void
}

export const Context = createContext<contextValue>({} as contextValue)
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

