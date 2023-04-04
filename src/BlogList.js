import './Home.css'
import { Link } from "react-router-dom"

const BlogList = (props) =>{      // can also directly reference as const Bloglist=({blogs,title,handleDetele}) I've not used direct reference coz I've used different names const "Blogs"=props."blogs"
    const Blogs = props.blogs
    const title = props.title
    //const handleDelete = props.handleDelete
    return(
        <>
        <div className="blog-list">
            <h1>{title}</h1>
        {Blogs.map((blog)=>(        //mapping each and every blog to the website. Just like 'for blog in Blogs'
                <>

                <div className="blog-preview" key={blog.id}>   
                {/* key is just an unique value for the react-dom to recognize each and every "blog" */}
                    <Link to={`blogs/${blog.id}`} style={{textDecoration:'none'}}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>


                {/* <div className="delete-blog" style={{padding:6}}>
                <button style={{backgroundColor:'#FF0000',fontWeight:"bolder",color:'#FFFFFF',borderRadius:'10px'}} onClick={()=>(handleDelete(blog.id))}>Delete</button>
                </div> */}
                </>
            )
        )
        }
        </div>
    </>
    )
}

export default BlogList