import "./ListItem.css";
const ListItem = ({
  deleteRow,
  itemName,
  index,
  handleSelect,
  checked,
  editable = false,
  handleEdit,
}) => {
  return (
    <div className="show-items">
      <div className="table">
        <input
          className="checkbox-round"
          type="checkbox"
          onChange={handleSelect && handleSelect}
          checked={checked}
        />
        <p
          className={`table-input ${checked && "line-through"}`}
          onChange={handleEdit && handleEdit}
          contentEditable={editable}
        >
          {itemName}
        </p>
      </div>
      <i className="fas fa-times delete" onClick={() => deleteRow(index)}></i>
    </div>
  );
};

export default ListItem;
