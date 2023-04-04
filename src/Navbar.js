import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1>Blog Site</h1>
            <div style={{fontSize:30,display:'inline-block'}}>
                <Link to = "/">Home</Link>
                <span style={{marginLeft:50}}>
                    <Link to = "/create">Create new Blog</Link>
                </span>
            </div>
        </nav>
    )
}

export default Navbar;