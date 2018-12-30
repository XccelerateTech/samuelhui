import React from 'react';

const SearchBar = (props) => {
    return (

        <form>
            <input onChange={props.search} type="text" name="searchBar" placeholder="What do you want...?" />     
        </form>
    )
}


export default SearchBar;


