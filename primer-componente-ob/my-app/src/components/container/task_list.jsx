import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const changeState = () => {
        TaskComponent({Task} ? true : false)
    }
    const defaultTask = new Task('elquiro', 'describir', false, LEVELS.NORMAL)

    return (
        <div>
            <h1>
                Your Tasks:
            </h1>
            <TaskComponent task = {defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
