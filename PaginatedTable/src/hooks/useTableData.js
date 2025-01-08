import { useEffect, useState } from "react";
import { fetchTableData } from "../apiService";

export default function useTableData() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState()
  useEffect(() => {
    const retryCount = 3
    const fetchData = async () => {
        for(let i=1;i<=retryCount;i++)
        {
            try {
                const res = await fetchTableData();
                setTableData(res);
                break;
              } catch (err) {
                console.log("Error in API");
                if(i===retryCount)
                {
                    setError('Error in api')
                    break;
                }
              }
        }
    };
    fetchData();
  }, []);
  return { tableData, setTableData, error };
}
