import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeProfilePicture, login } from "../../features/user/userSlice";
import Navbar from "../Navbar/Navbar";
import Language from "../Language/Language";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const profilePicture = useSelector(store => store.user.profilePicture);
    const setData = () => {
        window.cookieStore.get('user').then((data) => {
            if (data) {
                const decodedCookie = decodeURIComponent(data.value);
                const jsonData = decodedCookie.slice(2);
                const parseJsonData = JSON.parse(jsonData);
                localStorage.setItem('user', jsonData);
                dispatch(changeProfilePicture(parseJsonData.picture));
                dispatch(login(true));
            }
        });
    };
    window.cookieStore.get('user').then((data) => {
        if (!data) {
            navigate('/')
        }
    });
    useEffect(() => {
        setData();
    }, []);
    return (
        <>
            <Navbar profilePicture={profilePicture} />
            <Language />
        </>);
};
export default Home;