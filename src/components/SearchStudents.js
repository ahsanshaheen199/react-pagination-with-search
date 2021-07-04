import React from 'react'

function SearchStudents({searchValue,setSearchValue,setCurrentPage}) {
    return (
        <div>
            <form>
                <input type="text" value={searchValue} onChange={e => {setSearchValue(e.target.value); setCurrentPage(1)}} />
                <button type="submit">Search Students</button>
            </form>
        </div>
    )
}

export default SearchStudents
