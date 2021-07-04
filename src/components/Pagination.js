import React, { useEffect, useState } from 'react'

function Pagination({totalStudents,studentsPerPage,onPageChange}) {
    const [totalPages, setTotalPages] = useState(0)

    useEffect(()=>{
        if (totalStudents > 0 && studentsPerPage > 0) {
            setTotalPages(Math.ceil(totalStudents / studentsPerPage))
        }
    },[totalStudents,studentsPerPage])
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    if( totalPages === 0 ) {
        return null;
    }

    if( totalPages === 0 ) {
        return null;
    }

    return (
        <div>
            <ul>
                {
                   pageNumbers.map((pageNumber,index) => {
                       return(
                           <li key={index}>
                               <a href="!#" onClick={(e) => {onPageChange(pageNumber) ;e.preventDefault()}}>{pageNumber}</a>
                           </li>
                       )
                   }) 
                }
            </ul>
        </div>
    )
}

export default Pagination
