import React from 'react';
import './Column.css';
import Row from "../Row/Row";
import {ColumnProps} from '../../interfaces'

const Column: React.FC<ColumnProps> = (props) => {
    return (
        <div className="Column">
            <h2 className="groupName">Column {props.groupName}</h2>
            <TasksGenerator tasks={props.groupEntries} onClick={props.onClick}/>
        </div>
    );
};

/*TODO: investigate the missing type*/
const TasksGenerator: React.FC<any> = (props) => {
        return props.tasks.map((e: any) => {
            return <Row id={e.id} key={e.id} title={e.title} date={e.date} onClick={props.onClick}/>
        })
    }
;

export default Column;
