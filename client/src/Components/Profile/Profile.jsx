import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
    const profilePicture = useSelector(store => store.user.profilePicture);
    return (<Navbar profilePicture={profilePicture}/>);
};
export default Profile;