import "./listView.css"
export const ListViewData = ({ title,timetocook}) => {
    return (
        <div className="mDiv">
        <div className="mdiv1">
            <div>{ title}</div>
            <div>{timetocook }</div>
        </div>
        </div>
    )
}