import BlogList from './BlogList'
import usefetch from './useFetch';

//To create json-server to fetch api endpoints
//create a data/database.json file and have your json data there
// run "npx json-server --watch data/database.json --port 8000" innew terminal to create a rest api endpoint locally in an instance. This method avoid creating rest api just to test the application.

const Home = () =>
{
  const {Data:Blogs,isLoading,error} = usefetch('http://localhost:8000/blogs');



/*
const [name,SetName] = useState("Mario")
useEffect(()=>{        //this function simply runs whenever the page renders
  console.log("Use effect runs")
  console.log(name)
},[name])    //[] makes sure the useEffect function only runs for the initial render/initial change in 'State'
//[name] means useEffect only runs wheneven the name renders/changes in 'State'
*/



return (
    <div className="home" >
            {error && <h1>{error}</h1>}
            {isLoading && <h1>Loading...</h1>}                            {/* only if isLoading is true we dsiplay this */}
            {Blogs && <BlogList blogs={Blogs} title="All Blogs"/>}        {/* passing "handleDelete" function has props */}
            
            
            {/* in the above line only if "Blogs"(left side of the &&) is not null(true), <BlogList blogs=.... executes */}
            {/* <BlogList blogs={Blogs.filter((blog_filter)=>(blog_filter.author==="yoshi"))} title="yoshi's Blogs" /> filtering array of objects (this method returns new object) */}

            {/* <button onClick={()=>SetName("Luigi")}>Change name using UseState</button> */}
            {/*name*/}

            
    </div>
  );
}

export default Home;