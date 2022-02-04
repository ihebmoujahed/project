import React,{useState} from "react";
import axios from "axios";
function Search() {
 const [search,setSearch]=useState('')
 const [info,setinfo]=useState([])
const Search =()=>{
axios.post('/api/searchName',{id:search})
.then((res)=>{setinfo(res.data)})
.catch((err)=>{console.log(err)})
}
  return (
    <div>
      {/* <h4> Search :</h4> */}
        <input
          id="inputSearch"
          type="text"
          name="search"
          placeholder="top trending"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="search" type="submit" onClick={Search}>
          Search
        </button>
      
    </div>
  );
}

export default Search;
