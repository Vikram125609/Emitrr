import { Select, Option } from "@material-tailwind/react";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLanguage } from "../../features/test/testSlice";
const initialState = {
    language: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'language':
            return { ...state, language: action.value };
    }
}
const Language = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchAction = useDispatch();
    const handleLanguage = (language) => {
        dispatch({ type: 'language', value: language })
        dispatchAction(setLanguage(language));
    };
    const checkStartQuiz = () => {
        alert('Select Language');
    };
    return (
        <div style={{ marginTop: '40vh' }} className="flex justify-center space-x-8">
            <div className="w-72">
                <Select onChange={handleLanguage} label="Select Language">
                    <Option value="Cpp">C++</Option>
                    <Option value="Java">Java</Option>
                    <Option value="Python">Python</Option>
                    <Option value="Ruby">Ruby</Option>
                    <Option value="Javascript">Javascript</Option>
                </Select>
            </div>
            <div>
                {
                    state.language === '' ?
                        (
                            <button onClick={checkStartQuiz} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Start Quiz
                            </button>
                        ) :
                        (
                            <Link to={'/test'}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Start Quiz
                                </button>
                            </Link>
                        )
                }
            </div>
        </div>
    );
};
export default Language;