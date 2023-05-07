import React from 'react';

const SearchBox = () => {
    return (
        <div className={"search-box"}>
            <i className={"material-icons"}>search</i>
            <input  type={"search"} placeholder={"Search"}/>
        </div>
    );
};

export default SearchBox;