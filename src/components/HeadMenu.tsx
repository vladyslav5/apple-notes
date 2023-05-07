import React from 'react';
import Button from "./UI/Button";
import SearchBox from "./SearchBox";

const HeadMenu = () => {
    return (
        <div className={"head-menu"}>
            <div>
                <Button className={"material-icons"}>add</Button>
                <Button className={"material-icons"}>delete_outline</Button>
                <Button className={"material-icons"}>edit</Button>
            </div>
            <SearchBox/>
        </div>
    );
};

export default HeadMenu;