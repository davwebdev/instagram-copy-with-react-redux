import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../../store/slices/searchSlice/searchSlice";
import './NavbarSearch.css'

function NavbarSearch() {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    return(
        <div className="navbarSearch">
            <input type='text' placeholder='Search' value={search} onChange={(e) => dispatch(setSearch(e.target.value))}/>
        </div>
    )
}

export default NavbarSearch