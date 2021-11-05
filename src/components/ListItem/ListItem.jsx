import "./ListItem.css";
const ListItem = ({ deleteRow, itemName, index, handleSelect, checked }) => {
  return (
    <div className="show-items" key={index}>
      <div className="table">
        <input
          className="checkbox-round"
          type="checkbox"
          onChange={(e) => handleSelect(e, index)}
          checked={checked}
        />
        <h2 className={`table-input ${checked && "line-through"}`}>
          {itemName}
        </h2>
      </div>
      <i className="fas fa-times delete" onClick={() => deleteRow(index)}></i>
    </div>
  );
};

export default ListItem;
