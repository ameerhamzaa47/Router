import { Link, NavLink, useParams } from "react-router-dom";
function NavBar(){
    return(
        <div>
            <ul className="NLink">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/About Us'>About</NavLink></li>
                <li><NavLink to='/Users/Ahmed'>Ahmed</NavLink></li>
                <li><NavLink to='/Users/Hamza'>Hamza</NavLink></li>
                <li><NavLink to='/Users/Talha'>Talha</NavLink></li>
                <li><NavLink to='/Filter'>Filter</NavLink></li>
                <li><Link to='/Login'>Login</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;