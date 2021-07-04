import { useMemo, useState } from 'react';
import StudentLists from './components/StudentLists';
import SearchStudents from './components/SearchStudents';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [students, setStudents]  = useState([
    {id: 1, name: 'Ahsan Habib Shaheen', department: 'CSE'},
    {id: 2, name: 'Asaduzzman Shameem', department: 'BBA'},
    {id: 3, name: 'Niber Rahman', department: 'CSE'},
    {id: 4, name: 'Alamin', department: 'CSE'},
    {id: 5, name: 'Shishir Rahman', department: 'MATH'},
  ]);
  const [searchValue, setSearchValue] = useState('')
  const [totalStudents, setTotalStudents] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const studentsPerPage = 2

  const studentsData = useMemo(() => {
    let computedStudents = students
    if(searchValue) {
      computedStudents = [
        ...computedStudents.filter(student => {
          return student.name.toLowerCase().includes(searchValue.toLowerCase())
        })
      ];
    }

    setTotalStudents(computedStudents.length)


    return computedStudents.slice(
        (currentPage - 1) * studentsPerPage,
        (currentPage - 1) * studentsPerPage + studentsPerPage
    );
  },[students,searchValue,currentPage]);

  return (
    <div className="App">
      <SearchStudents setSearchValue={setSearchValue} searchValue={searchValue} setCurrentPage={setCurrentPage} />
      <StudentLists students={studentsData} />
      {
        totalStudents > studentsPerPage && <Pagination totalStudents={totalStudents} studentsPerPage={studentsPerPage} onPageChange={page => setCurrentPage(page)} />
      }
    </div>
  );
}

export default App;
