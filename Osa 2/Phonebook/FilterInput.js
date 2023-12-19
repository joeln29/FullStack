import React, {useState} from "react";

const FilterInput = ({newSearch, handleSearchChange}) => {
    return(
        <p>
            filter shown with
            <input type="text" value={newSearch} onChange={handleSearchChange} id="input"/>
        </p>
    )
}

export default FilterInput;