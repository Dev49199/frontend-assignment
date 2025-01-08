import { PAGE_NUM_ACTION } from '../constants'
import './styles.css'
export default function Pagination({pageNum, setPageNum, totalPages=10}){
    const handlePageIncrementDecrement =(type)=>{
        switch(type)
        {
            case PAGE_NUM_ACTION.INCREMENT:
                const newPageNum = (pageNum+1) > totalPages ? totalPages : pageNum+1
                setPageNum(PAGE_NUM_ACTION.SET,newPageNum)
                break;
            case PAGE_NUM_ACTION.DECREMENT:
                const newPage = (pageNum-1)<=0 ? 1 : pageNum-1

                setPageNum(PAGE_NUM_ACTION.SET,newPage)
                break
        }
    }
    return <div className='paginationContainer'>
        <ul className='pageList'>
            <li onClick={()=>{
                handlePageIncrementDecrement(PAGE_NUM_ACTION.DECREMENT)
            }}>P</li>
            {
                Array.from({length:totalPages}).map((_,index)=>{
                    return  <li className={`${pageNum === index+1 ? 'active':''}`} onClick={()=>{
                        setPageNum(PAGE_NUM_ACTION.SET,index+1)
                    }}>{index+1}</li>
                })
            } 
            <li onClick={()=>{
                handlePageIncrementDecrement(PAGE_NUM_ACTION.INCREMENT)
            }}>N</li>
        </ul>
    </div>
}