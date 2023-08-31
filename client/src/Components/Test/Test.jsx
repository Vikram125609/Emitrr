import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Test = () => {
    const language = useSelector(store => store.test.language);
    const navigate = useNavigate()
    if (language === '') {
        navigate('/home');
    }
    useEffect(() => {
        
    }, []);
    return (
        <>
            <Navbar />
        </>
    );
};

export default Test;