import React from 'react';
import Task from '../../Models/Task';
import { observer } from 'mobx-react-lite';
import { Switch, Icon } from 'antd';

interface Props {
  task: Task;
}

const TaskListItem = ({ task }: Props) => {
  const itemCss = [
    "task-item",
    task.isDone && "task-item--done"
  ].join(' ')

  return (
    <div className={itemCss}>
      <div className="task-item__data">
        <div className="task-item__title">{task.title}</div>
        <div className="task-item__description">
          <i>{task.description}</i>
        </div>
      </div>
      <Switch
        className="task-item__switch"
        onChange={task.toggleStatus}
        checkedChildren={<Icon type="check" />}
        unCheckedChildren={<Icon type="close" />}
        defaultChecked={task.isDone}
      />
    </div>
  );
};

export default observer(TaskListItem);
