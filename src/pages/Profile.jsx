import Button from "../components/Button";
import{ Link }from 'react-router-dom'

const Profile = () => {
    return(
        <div>
            <h1>Home</h1>
                <Link to={'/myjob'}>My job</Link>
                <Link to={'/'}>Home</Link>
            <Button/>
        </div>
    )
}

export default Profile;