import { useState } from "react";
//import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState('');
    const [Body,setBody] = useState('');
    const [Author,setAuthor] = useState('');
    const [isLoading,SetisLoading] = useState(true)
    const to_navigate_home = useNavigate()

    const handlesSubmit = (e) => {
        e.preventDefault()                //by default the page refreshes when submit is clicked to prevent this we use this method
        const blog = {title, Body, Author};
        fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)})
          .then(()=>{
            console.log(blog)
        //     <Popup position="center center">
        //         <div>New blog added</div>
        //         </Popup>
            SetisLoading(true);
        })
        .then(()=>{
            to_navigate_home('/');
        })
    }

    return(
        <>
        <div className="create">
            <h2>Add new Blog</h2>
            <div>
                <form onSubmit={handlesSubmit}>
                    <label>Blog Title</label>
                    <input type="text" value={title} required onChange={(eventobj)=>(setTitle(eventobj.target.value))} />
                    <br/>
                    <label>Blog auhtor</label>
                    <input type="text" value={Author} required onChange={(eventobj)=>(setAuthor(eventobj.target.value))} />
                    <br/>
                    <label>Blog body</label>
                    <br/>
                    <textarea type="text" rows="20" cols="60" value={Body} required onChange={(eventobj)=>(setBody(eventobj.target.value))} />
                    <br/>
                    {isLoading && <button style={{ width: 100}} type="submit">Submit</button>}
                    {!isLoading && <button disabled style={{ width: 100}} type="submit">Submit.....</button>}
                </form>
            </div>
        </div>
        </>
    )
}
export default Create;