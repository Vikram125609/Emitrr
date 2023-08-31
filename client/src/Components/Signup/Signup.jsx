import './Signup.css'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    if (localStorage.getItem('user')) {
        navigate('/home');
    }
    window.cookieStore.get('user').then((data) => {
        if (data) {
            navigate('/home')
        }
    });
    const getUrl = () => {
        const options = {
            redirect_uri: 'http://localhost:8080/api/v1/auth',
            client_id: '1008926871515-bmmd4i5dlkke5bntqvst08etpe2em42h.apps.googleusercontent.com',
            access_type: 'offline',
            response_type: 'code',
            prompt: 'consent',
            scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'].join(" ")
        }
        return `https://accounts.google.com/o/oauth2/auth?client_id=${options?.client_id}&redirect_uri=${options?.redirect_uri}&response_type=code&scope=${options?.scope}&access_type=${options?.access_type}`
    }
    return (
        <a href={getUrl()}>
            <button type="button" className="login-with-google-btn google-signup-button" >
                Sign in with Google
            </button>
        </a>
    );
};
export default Signup;