import ListItem from "../ListItem/ListItem";
import Tab from "../Tab";
const ListResult = ({
  todoList,
  deleteRow,
  handleSelect,
  handleTabClick,
  handleClearCompleted,
}) => {
  return (
    <div>
      {!!(todoList && todoList.length) &&
        todoList.map((list, index) => (
          <ListItem
            key={index}
            deleteRow={deleteRow}
            itemName={list.name}
            checked={list.checked}
            index={index}
            handleSelect={handleSelect}
          />
        ))}
      {!!(todoList && todoList.length) && (
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
