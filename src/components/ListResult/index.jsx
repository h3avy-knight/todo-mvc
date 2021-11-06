import ListItem from "../ListItem/ListItem";
import Tab from "../Tab";
const ListResult = ({
  todoList,
  handleEdit,
  editableIndex,
  deleteRow,
  handleSelect,
  handleTabClick,
  handleClearCompleted,
  showTab,
}) => {
  return (
    <div>
      {!!(todoList && todoList.length) &&
        todoList.map((list, index) => (
          <ListItem
            key={index}
            editable={editableIndex === index}
            handleEdit={handleEdit}
            deleteRow={deleteRow}
            itemName={list.name}
            checked={list.checked}
            index={index}
            handleEdit={(e) => handleEdit(e, index)}
            handleSelect={(e) => handleSelect(e, index)}
          />
        ))}
      {showTab && (
        <Tab
          handleTabClick={handleTabClick}
          handleClearCompleted={handleClearCompleted}
          remainingTodo={
            todoList.filter((item) => item.checked === false).length
          }
        />
      )}
    </div>
  );
};

export default ListResult;
