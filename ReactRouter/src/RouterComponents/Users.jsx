import {useParams} from 'react-router-dom'

function Users(){
    let parmss=useParams()
    let {name}=parmss
    return(
        <h1>This is {name}  Page.</h1>
    )
}
export default Users