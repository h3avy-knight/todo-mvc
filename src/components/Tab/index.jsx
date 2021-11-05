import "./Tab.css";
const Tab = ({ remainingTodo, handleTabClick, handleClearCompleted }) => {
  return (
    <div className="tab-container">
      <div className="count-container">{remainingTodo} item left</div>
      <div className="button-container">
        <button className="btn" onClick={() => handleTabClick("all")}>
          All
        </button>
        <button className="btn" onClick={() => handleTabClick("active")}>
          Active
        </button>
        <button className="btn" onClick={() => handleTabClick("completed")}>
          Completed
        </button>
      </div>
      <button className="clear-container" onClick={handleClearCompleted}>
        Clear completd
      </button>
    </div>
  );
};

export default Tab;
