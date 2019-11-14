import React from 'react';
import './Column.css';

interface ColumnProps {
    name: string
}

const Column: React.FC<ColumnProps> = (props) => {
    /**
     * 📅 2019-11-14 12:02 a.m.
     * 📝 Column.tsx ➡ func Column()
     **/
    // TODO: do not commit this
    console.info("⏰10 ➡ 📝 Column.tsx ➡ func Column()");
    console.info("props", props);
    
    return (
        <div className="Column">
            <h2>Column {props.name}</h2>
            {props.children}
        </div>
    );
};

export default Column;
