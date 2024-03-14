import React from "react";

const FilterInput = ({newSearch, handleSearchChange}) => {
    return(
        <p>
            Filter shown with: 
            <input type="text" value={newSearch} onChange={handleSearchChange} id="input"/>
        </p>
    )
}

export default FilterInput;