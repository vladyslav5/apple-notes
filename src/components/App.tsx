import React from 'react';
import Sidebar from "./Sidebar";
import WorkSpace from "./WorkSpace";
import HeadMenu from "./HeadMenu";

const App = () => {
    return (
        <div className={"container"}>
            <HeadMenu/>
            <Sidebar/>
            <WorkSpace/>
        </div>
    );
};

export default App;