import React from 'react';

const StudentLists = (  {students} ) => {
    return (
        <ul>
            {
                students.map(student => {
                    return (
                        <li key={student.id}>{student.name}</li>
                    )
                })
            }
        </ul>
    );
}

export default StudentLists;