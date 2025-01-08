import "./styles.css";
export default function DataTable({ listData }) {
  return (
    <div className="datatableContainer">
      <table>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {listData?.map((listValue) => {
            return (
              <tr>
                <td>{listValue["s.no"]}</td>
                <td>{listValue["percentage.funded"]}</td>
                <td>{listValue["amt.pledged"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
