import React from 'react';
import './Row.css';
import {TaskProps} from '../../interfaces'

const Row: React.FC<TaskProps> = (props) => (
    <div className="taskWrapper" onClick={props.onClick}>
        <span className="taskDate">{props.date} </span>
        <span className="taskTitle">{props.title}</span>
    </div>
);

export default Row;
