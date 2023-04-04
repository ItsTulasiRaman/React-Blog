import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () =>
{
    const {id} = useParams()
    const {Data:blog_id,error,isLoading} = useFetch('http://localhost:8000/blogs/' + id)  //order of const element {} doesn't matter coz the Data,error and isLoading are objects

    const navigate_to_home = useNavigate()
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog_id.id,
        {
            method:'DELETE'
        })
        .then(()=>navigate_to_home('/'))
    }
    return (
        <div className='BlogDetails'>
            <h1>Blog detail - {id}</h1>
            {isLoading && <div>Loading..</div>}
            {error && <div>{error}</div>}
            {blog_id && (
                <article>
                    <h2>{blog_id.title}</h2>
                    <h2>{blog_id.author}</h2>
                    <div>{blog_id.body}</div>
                </article>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BlogDetails;