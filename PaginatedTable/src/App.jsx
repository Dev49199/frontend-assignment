import "./App.css";
import Pagination from "./Pagination";
import usePageNum from "./hooks/usePageNum";
import useTableData from "./hooks/useTableData";
import DataTable from "./DataTable";
import { PAGE_LIMIT } from "./constants";

function App() {
  const { pageNum, handlePageNum } = usePageNum();
  const { tableData, error } = useTableData();

  if (error) {
    return <h1>No Data Found</h1>;
  }
  return (
    <>
      <DataTable
        listData={tableData.slice(
          (pageNum - 1) * PAGE_LIMIT,
          (pageNum - 1) * PAGE_LIMIT + PAGE_LIMIT
        )}
      />
      <Pagination
        pageNum={pageNum}
        setPageNum={handlePageNum}
        totalPages={Math.ceil(tableData?.length / PAGE_LIMIT)}
      />
    </>
  );
}

export default App;
