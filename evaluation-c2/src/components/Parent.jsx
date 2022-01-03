import "./listView.css"
import React from "react";
import { ReceipeInput } from "./RecepeInput";
import { ListView } from "./ListView";
import { ListViewData } from "./listViewData";
import {Display} from "./ScreenDisplay"
export const Parent = (id) => {
    const [data, setData] = React.useState([]);
    const [screen, setScreenData] = React.useState(null);
    const [sorted, setSorted] = React.useState("asc");
    const dummyFunc = (id) => {
        fetch(`http://localhost:3333/receipeData/${id}`).then(d => d.json()).then(d => setScreenData(d));
    }
    React.useEffect(() => {
        fetch(`http://localhost:3333/receipeData?_sort=timetocook&_order=${sorted}`).then(d => d.json()).then(d => setData(d));
    }, [screen,sorted]);
    console.log("data", data)
    return (
        <div className="mainDiv">
            <div>
            < ReceipeInput />
            </div>
            <div >
                <button onClick={()=>setSorted("asc")}>Sort by Less Cooking Time</button>
                <button onClick={()=>setSorted("desc")}>Sort by More Cooking Time</button>
                {data.length > 1 ? <ListView /> : null}
            {data.map((el) => <ListViewData key={el.id}{...el} dummyFunc={dummyFunc}/>)}
            
            </div>
            <div>
            < Display {...screen} />
            </div>
        </div>
    );

} 