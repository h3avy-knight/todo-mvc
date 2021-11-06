import React, { useEffect, useState } from "react";
// import ListItem from "./ListItem/ListItem";
import ListResult from "./ListResult";

const AddTodo = () => {
  const todos = localStorage.getItem("react-todo");

  useEffect(() => {
    if (todos && todos.length) {
      setItems(JSON.parse(todos));
      setInitialItems(JSON.parse(todos));
    }
  }, []);

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [initialItems, setInitialItems] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const handleItemEdit = (e, index) => {
    console.log(e, index);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClearCompleted = () => {
    const remainingItems = initialItems.filter(
      (item) => item.checked === false
    );
    setInitialItems([...remainingItems]);
    setItems([...remainingItems]);
    localStorage.setItem("react-todo", JSON.stringify([...remainingItems]));
  };

  const handleSelect = (e, index) => {
    const newItems = [...items];
    newItems[index].checked = e.target.checked;
    setItems([...newItems]);
    setInitialItems([...newItems]);
    localStorage.setItem("react-todo", JSON.stringify([...newItems]));
  };

  const handleTabClick = (type) => {
    switch (type) {
      case "all":
        setItems([...initialItems]);
        break;
      case "active":
        const activeItems = initialItems.filter(
          (item) => item.checked === false
        );
        setItems([...activeItems]);
        break;
      case "completed":
        const completdItems = initialItems.filter(
          (item) => item.checked === true
        );
        setItems([...completdItems]);
        break;
      default:
        break;
    }
  };

  const enterKeyPress = (e) => {
    if (e.keyCode === 13 && value.trim().length > 0) {
      setItems([
        ...items,
        {
          name: value,
          checked: false,
        },
      ]);
      setInitialItems([
        ...items,
        {
          name: value,
          checked: false,
        },
      ]);
      localStorage.setItem(
        "react-todo",
        JSON.stringify([
          ...items,
          {
            name: value,
            checked: false,
          },
        ])
      );

      setValue("");
    }
  };

  const deleteRow = (index) => {
    const filteredItem = items.filter((element, id) => {
      return id !== index;
    });
    setItems(filteredItem);
    setInitialItems(filteredItem);
    localStorage.setItem("react-todo", JSON.stringify(filteredItem));
  };

  const toggleSelectAll = () => {
    let selectedItems = [];
    if (!isSelectAll) {
      selectedItems = items.map((item) => {
        item.checked = true;
        return item;
      });

      setIsSelectAll(true);
    } else {
      selectedItems = items.map((item) => {
        item.checked = false;
        return item;
      });
      setIsSelectAll(false);
    }
    setItems(selectedItems);
    setInitialItems(selectedItems);
    localStorage.setItem("react-todo", JSON.stringify(selectedItems));
  };

  return (
    <div>
      <h1 className="todo-header">todos</h1>
      <div className="todoapp">
        <div>
          <div className="input-container">
            <div className="icon-container" onClick={toggleSelectAll}>
              {items.length !== 0 && (
                <i className={`fas fa-chevron-down down-icon`} />
              )}
            </div>
            <input
              type="text"
              className="new-todo"
              value={value}
              autoFocus
              placeholder="What needs to be done?"
              onKeyDown={enterKeyPress}
              onChange={handleChange}
            />
          </div>
        </div>

        <ListResult
          todoList={items}
          deleteRow={deleteRow}
          handleSelect={handleSelect}
          handleTabClick={handleTabClick}
          handleEdit={handleItemEdit}
          editableIndex={1}
          handleClearCompleted={handleClearCompleted}
          showTab={!!initialItems.length}
        />
      </div>
    </div>
  );
};

export default AddTodo;
