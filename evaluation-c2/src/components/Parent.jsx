import "./listView.css"
import React from "react";
import { ReceipeInput } from "./RecepeInput";
import { ListView } from "./ListView";
import { ListViewData } from "./listViewData";
import {Display} from "./ScreenDisplay"
export const Parent = (id) => {
    const [data, setData] = React.useState([]);
    const [screen, setScreenData] = React.useState(null);
    const dummyFunc = (id) => {
        fetch(`http://localhost:3333/receipeData/${id}`).then(d => d.json()).then(d => setScreenData(d));
    }
    React.useEffect(() => {
        fetch("http://localhost:3333/receipeData").then(d => d.json()).then(d => setData(d));
    }, [screen]);
    console.log("data",data)
    return (
        <div className="mainDiv">
            <div>
            < ReceipeInput />
            </div>
            <div >
            {data.length > 1 ? <ListView />:null}
            {data.map((el) => <ListViewData key={el.id}{...el} dummyFunc={dummyFunc}/>)}
            </div>
            <div>
            < Display {...screen} />
            </div>
        </div>
    );

} 