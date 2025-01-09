import { PAGE_NUM_ACTION } from "../constants";
import "./styles.css";

export default function Pagination({ pageNum, setPageNum, totalPages = 10 }) {
  const getVisiblePages = () => {
    const visiblePages = [];
    const edgePages = 2; 
    const midPages = 2;

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (pageNum <= edgePages + midPages + 1) {
      visiblePages.push(...Array.from({ length: edgePages + midPages + 1 }, (_, i) => i + 1));
      visiblePages.push("...");
      visiblePages.push(totalPages);
    } else if (pageNum > totalPages - edgePages - midPages) {
      visiblePages.push(1);
      visiblePages.push("...");
      visiblePages.push(
        ...Array.from({ length: edgePages + midPages + 1 }, (_, i) => totalPages - edgePages - midPages + i)
      );
    } else {
      visiblePages.push(1);
      visiblePages.push("...");
      visiblePages.push(...Array.from({ length: midPages * 2 + 1 }, (_, i) => pageNum - midPages + i));
      visiblePages.push("...");
      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  const handlePageIncrementDecrement = (type) => {
    switch (type) {
      case PAGE_NUM_ACTION.INCREMENT:
        setPageNum(PAGE_NUM_ACTION.SET, Math.min(pageNum + 1, totalPages));
        break;
      case PAGE_NUM_ACTION.DECREMENT:
        setPageNum(PAGE_NUM_ACTION.SET, Math.max(pageNum - 1, 1));
        break;
      default:
        break;
    }
  };

  return (
    <div className="paginationContainer">
      <ul className="pageList">
        <li
          className={`pageItem ${pageNum === 1 ? "disabled" : ""}`}
          onClick={() => {
            handlePageIncrementDecrement(PAGE_NUM_ACTION.DECREMENT);
          }}
        >
          Prev
        </li>
        {getVisiblePages().map((page, index) => (
          <li
            key={index}
            className={`pageItem ${page === "..." ? "dots" : pageNum === page ? "active" : ""}`}
            onClick={() => {
              if (page !== "...") {
                setPageNum(PAGE_NUM_ACTION.SET, page);
              }
            }}
          >
            {page}
          </li>
        ))}
        <li
          className={`pageItem ${pageNum === totalPages ? "disabled" : ""}`}
          onClick={() => {
            handlePageIncrementDecrement(PAGE_NUM_ACTION.INCREMENT);
          }}
        >
          Next
        </li>
      </ul>
    </div>
  );
}
