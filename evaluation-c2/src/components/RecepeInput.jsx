import React from "react";

export const ReceipeInput = () => {
    const [receipe, setReceipe] = React.useState(null);
    const ref = React.useRef(null);
    //itle, ingredients, time to cook, an image and instructions.
    const handleChange = (e) => {
        let { name, value, type } = e.target;
        value = type === "file" ? URL.createObjectURL(ref.current.files[0]) : value;
        setReceipe({...receipe,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("receipe",receipe)
        console.log("files", ref.current.files[0]);
        fetch("http://localhost:3333/receipeData", {
            
        })
    }
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <label>Title</label> &ensp;
                <input type="text" name="title" placeholder="" onChange={handleChange} /><br></br>
                <label>Ingredients</label> &ensp;
                <input type="text" name="ingredients" placeholder="ingredients" onChange={handleChange} /><br></br>
                <label>Time to Cook</label> &ensp;
                <input type="text" name="timetocook" placeholder="enter estimates time to cook" onChange={handleChange} /><br></br>
                <label>Image</label> &ensp;
                <input type="file" ref={ref} name="image" onChange={handleChange} /><br></br>
                
                <label>Instructions</label> &ensp;
                <input type="text" name="instructions" placeholder="" onChange={handleChange} /><br></br>
                <input type="submit" />
            </form>
        </div>
    )
}