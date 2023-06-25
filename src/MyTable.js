import SketchExample from "./ColorPicker";
import "./MyTable.css";

function MyTable(props) {
  let nRows = props.nRows;
  let nColumns = props.nColumns;
  let rows = [];
  for (let i = 0; i < nRows; i++) {
    rows.push(<MyBetterRow nColumns={nColumns} />);
  }
  return (
    <div>
      
      <table>
        <MyBetterHeader nColumns={nColumns} />
        {rows}
      </table>
    </div>
  );
}

function MyBetterHeader(props) {
  let cells = [];
  for (let i = 0; i < props.nColumns; i++) {
    cells.push(<MyBetterCell header={true} />);
  }
  return <tr>{cells}</tr>;
}

function MyBetterRow(props) {
  
  let cells = [];
  for (let i = 0; i < props.nColumns; i++) {
    cells.push(<MyBetterCell header={false} />);
  }
  return <tr>{cells}</tr>;
}

function MyBetterCell(props) {

  function changeColor(e) {
    e.target.style.backgroundColor = "white";
  }

  let backgroundColor = "inherit";

  let colorChoice = Math.floor(Math.random() * 5);

  switch (colorChoice) {
    case 0:
      backgroundColor = "#0000CC";
      break;
    case 1:
      backgroundColor = "#00CCCC";
      break;
    case 2:
      backgroundColor = "#D4AF37";
      break;
    case 3:
      backgroundColor = "#990000";
      break;
    case 4:
      backgroundColor = "	#FFC0CB";
      break;
    default:
      backgroundColor = "#D4AF37";
  }

  return props.header ? (
    <th></th>
  ) : (
    <td onClick={changeColor} style={{ backgroundColor }}></td>
  );
}










export default MyTable;
