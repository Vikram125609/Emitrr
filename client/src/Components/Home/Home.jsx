import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeProfilePicture } from "../../features/user/userSlice";
import Navbar from "../Navbar/Navbar";
import Language from "../Language/Language";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const setData = () => {
        window.cookieStore.get('user').then((data) => {
            if (data) {
                const decodedCookie = decodeURIComponent(data.value);
                const jsonData = decodedCookie.slice(2);
                const parseJsonData = JSON.parse(jsonData);
                localStorage.setItem('user', jsonData);
                localStorage.setItem('profilePicture', parseJsonData.picture);
                dispatch(changeProfilePicture(parseJsonData.picture));
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
            <Navbar/>
            <Language />
        </>);
};
export default Home;