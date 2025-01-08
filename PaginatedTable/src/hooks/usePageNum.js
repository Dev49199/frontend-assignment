import { useState } from "react";
import { PAGE_NUM_ACTION } from "../constants";

export default function usePageNum(){
    const [pageNum, setPageNum] = useState(1);
    const handlePageNum = (type, value=0)=>{
        switch(type){
            case PAGE_NUM_ACTION.SET:
                setPageNum(value)
                break
        }
    }
    return {pageNum, handlePageNum}
}