import Button from "../components/Button";
import{Link }from 'react-router-dom'

const Myjob = () => {
    return(
        <div>
            <h1>My job</h1>
                <Link to={'/profile'}>profile</Link>
                <Link to={'/'}>Home</Link>
            <Button/>
        </div>
    )
}

export default Myjob;