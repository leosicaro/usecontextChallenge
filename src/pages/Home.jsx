import Button from "../components/Button";
import{Link}from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
                <Link to={'/profile'}>profile</Link>
                <Link to={'/myjob'}>My job</Link>
            <Button/>
        </div>
    )
}

export default Home;