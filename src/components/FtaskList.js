import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Ftask from "./Ftask";

const FtaskList = () => {
  const { ftasks } = useContext(TaskListContext);

  return (
    <div className='completed'>
      {ftasks.length ? (
        <ul>
          {ftasks.map(ftask => {
            return <Ftask ftask={ftask} key={ftask.id} />;
          })}
        </ul>
      ) : (
        <ul className="no-tasks-completed">No Tasks Completed</ul>
      )}
    </div>
  );
};

export default FtaskList;
