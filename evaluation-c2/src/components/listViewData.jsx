import "./listView.css"
import {Parent} from "./Parent"
export const ListViewData = ({id,title,timetocook}) => {
    const handle = (id) => {
        <Parent id />
    }
    return (
        <div onClick={()=>handle(id)} className="mdiv1">
            { title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;
            {timetocook } Min
        </div>
    )
}