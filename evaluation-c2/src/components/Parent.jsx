import "./listView.css"
import React from "react";
import { ReceipeInput } from "./RecepeInput";
import { ListView } from "./ListView";
import { ListViewData} from "./listViewData"
export const Parent = (id) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3333/receipeData").then(d => d.json()).then(d => setData(d));
    }, []);
    console.log("data",data)
    return (
        <>
            < ReceipeInput />
            {data.length > 1 ? <ListView />:null}
            <div className="mDiv">
            {data.map((el) => <ListViewData key={el.id}{...el} />)}
            </div>
        </>
    );

} 