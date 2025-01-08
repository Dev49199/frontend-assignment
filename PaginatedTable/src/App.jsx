import { useEffect } from 'react';
import './App.css'
import Pagination from './Pagination'
import usePageNum from './hooks/usePageNum'
import { fetchTableData } from './apiService';
import useTableData from './hooks/useTableData';
import DataTable from './DataTable';
import { PAGE_OFFSET } from './constants';

function App() {
  const {pageNum, handlePageNum} = usePageNum();
  const {tableData, setTableData, error} = useTableData();

  if(error)
  {
    return <h1>No Data Found</h1>
  }
  return (
    <>
    <DataTable listData={tableData.slice((pageNum-1)*PAGE_OFFSET, (pageNum-1)*PAGE_OFFSET+PAGE_OFFSET)}/>
    <Pagination pageNum={pageNum} setPageNum={handlePageNum} totalPages={Math.ceil(tableData?.length/PAGE_OFFSET)}/>
    </>
  )
}

export default App
