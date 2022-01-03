import "./listView.css"
import React from "react";
import {Button} from "antd"
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
            <div  >
                <Button  type="primary" onClick={()=>setSorted("asc")}>Sort by Less Cooking Time</Button>
                <Button  type="primary" onClick={()=>setSorted("desc")}>Sort by More Cooking Time</Button>
                {data.length > 1 ? <ListView /> : null}
                <div className="scrollBar">
            {data.map((el) => <ListViewData key={el.id}{...el} dummyFunc={dummyFunc}/>)}
                </div>
            
            </div>
            <div>
                <>
                    { screen ?
                        < Display {...screen} /> :null       
                    }
                    </>
            </div>
        </div>
    );

} 