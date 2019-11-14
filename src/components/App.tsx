import React, {useState} from 'react';
import './App.css';
import Column from "./Column/Column";
import initialData from "../tests/mockData.ts";

const App: React.FC = () => {
    const [data, setData] = useState(initialData.payload);

    const onUpdate = () => {
        console.warn("⚠ TODO: Trigger setData()");
        // TODO: create update data logic
        setData(data);
    };

    return (
        <div className="App">
            <h1>Countdown app</h1>
            <main className="wrapper">
                <ColumnGenerator data={data} onUpdate={onUpdate}/>
            </main>
        </div>
    );
};

/*TODO: missing type*/
const ColumnGenerator: any = (props: any) => {
        return props.data.map((e: any) => {
            return (
                <Column groupName={e.groupName} key={e.groupName} groupEntries={e.groupEntries} onClick={props.onUpdate}/>
            )
        })
    }
;

export default App;
