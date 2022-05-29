import React from "react";

const TasksFilter = () => {
    return (
      <React.Fragment>
        <li>
            <button className="selected">All</button>
        </li>
        <li>
            <button>Active</button>
        </li>
        <li>
            <button>Completed</button>
        </li>
      </React.Fragment>
    );
};
export default TasksFilter;