import { useNavigate } from "react-router-dom"

const UrlNotFound = () =>
{
    const Navigate = useNavigate();
    return(
        <div>
            <h1>You have misspelled the url</h1>
            <button onClick={()=>Navigate('/')}>Click to go back</button>
        </div>
    )
}

export default UrlNotFound;