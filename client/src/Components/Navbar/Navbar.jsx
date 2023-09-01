import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const profilePicture = useSelector(store => store.user.profilePicture);
    return (
        <nav className="shadow-xl flex justify-between items-center">
            <div>
                <img style={{ width: '8vh', borderRadius: '50%' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" alt="logo" />
            </div>
            <div className="flex justify-between w-3/4">
                <div className="space-x-8 > * + *">
                    <Link to={'/home'}>
                        <span className="text-lg">Home</span>
                    </Link>
                    <Link to={'/profile'}>
                        <span className="text-lg">Profile</span>
                    </Link>
                </div>
            </div>
            <div>
                <img style={{ borderRadius: '50%', width: '8vh' }} src={localStorage.getItem('profilePicture') ? localStorage.getItem('profilePicture') : profilePicture} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;