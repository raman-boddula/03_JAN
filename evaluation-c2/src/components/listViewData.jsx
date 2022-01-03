import "./listView.css"
import {Parent} from "./Parent"
export const ListViewData = ({id,title,timetocook,dummyFunc}) => {
    const handle = (id) => {
        dummyFunc(id)
    }
    return (
        <div onClick={()=>handle(id)} className="mdiv1">
            { title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;
            {timetocook } Min
        </div>
    )
}