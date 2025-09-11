import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { filterChange } from '../reducers/filterReducer';
const VisibilityFilter = () => {
    const filter = useSelector((state)=>state.filter);
   const dispatch = useDispatch();
    
    const filterSelected = (filter) => {
    console.log(filter);
    // setFilter(filter);
    dispatch(filterChange(filter))
  }
  return (
     <div>
        all<input type="radio" name="filter" onChange={()=>filterSelected("ALL")}/>
        important <input type="radio"  name="filter" onChange={()=>filterSelected("IMPORTANT")}/>
        not important <input type="radio"  name="filter" onChange={()=>filterSelected("NOT_IMPORTANT")}/>
      </div>
  )
}

export default VisibilityFilter
