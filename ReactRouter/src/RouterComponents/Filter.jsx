import { useSearchParams , Link, Outlet } from "react-router-dom"
function Filter(){
    let [searchParms,setsearchParms]=useSearchParams();
    console.log(searchParms.get('age'))
    return(
        <>
        <h1>Filter Page.</h1>
        <p>Name is {searchParms.get('name')}</p>
        <p>Age is {searchParms.get('age')}</p>
        <Link to="Gaming">Gaming </Link>
        <Link to="Laptop">Laptop </Link>
        <Link to="other">other</Link>
        <Outlet/>
        </>
    )
}
export default Filter