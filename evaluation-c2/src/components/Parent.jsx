import React from "react";
import { ReceipeInput } from "./RecepeInput";

 
export const Parent = () => {
    const [data, setData] = React.useState([]);
    
    return (
        <>
        < ReceipeInput />
        </>
    )

} 