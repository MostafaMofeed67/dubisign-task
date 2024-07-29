import React from "react";

interface TaskItemProps {
  title: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ title }) => {
  return <p className="border mb-3 p-3 rounded-md">{title}</p>;
};

export default TaskItem;
