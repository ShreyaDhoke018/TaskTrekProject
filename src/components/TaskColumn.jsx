import React from 'react';
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css"
import TaskCard from './TaskCard';

const TaskColumn = ({ name, icon }) => {

    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className="task_column_icon" src={icon} alt=''></img>
                {name}
            </h2>
            <TaskCard />
        </section>
    )
}

export default TaskColumn
