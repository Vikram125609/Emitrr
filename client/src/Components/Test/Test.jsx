import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import { getTestQuestion } from "../../Api/Api";
import Options from "./Options";
// import Question from "./Question";
// import Row from "./Row";

const initialState = {
    testQuestion: [],
    index: 0,
    // markedAns: -1,
    // marked: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'testQuestion':
            return { ...state, testQuestion: action.value };
        case 'nextQuestion':
            return { ...state, index: state?.index < state?.testQuestion?.length - 1 ? state?.index + 1 : state?.index };
        // case 'prevQuestion':
        //     return { ...state, index: state?.index > 0 ? state.index - 1 : state?.index };
        // case 'markedAns':
        //     return { ...state, markedAns: action?.value };
        // case 'marked':
        //     return { ...state, marked: true };
    }
};


const Test = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [markedAns, setMarkedAns] = useState(-1);
    const language = useSelector(store => store.test.language);
    const getTestQuestions = async () => {
        const data = { language }
        const result = await getTestQuestion(data);
        dispatch({ type: 'testQuestion', value: result?.data?.testQuestions });
    }
    // const prev = () => {
    //     dispatch({ type: 'prevQuestion' });
    // };
    const next = () => {
        setMarkedAns(-1);
        dispatch({ type: 'nextQuestion' });
    };
    useEffect(() => {
        if (language === '') {
            navigate('/home');
        }
        else {
            getTestQuestions()
        }
    }, [language, navigate]);
    return (
        <>
            <Navbar />
            <div>
                <h1 style={{ marginTop: '5vh' }} className="text-center text-2xl">Exercise on {language}</h1>
            </div>
            <div className="p-10">
                <div style={{ backgroundColor: '#b7d2ff' }} className="p-5 rounded space-x-4">
                    <span>{state?.index + 1}.</span>
                    <span>{state?.testQuestion[state?.index]?.question}</span>
                </div>
                <div className="m-1">
                    <Options options={state?.testQuestion[state?.index]?.options} correct_answer={state?.testQuestion[state?.index]?.correct_answer} markedAns={markedAns} setMarkedAns={setMarkedAns} />
                </div>
                {/* <div>
                    {
                        state?.testQuestion[state?.index]?.options?.map((option, index) => {
                            return (
                                <div onClick={() => {
                                    // db main correct ya incorrect update karna hai
                                    // dispatch({ type: 'marked' });
                                    // dispatch({ type: 'markedAns', value: index });
                                }} style={{ border: state?.markedAns === state?.testQuestion[state?.index].correct_answer && index === state?.markedAns ? '3px solid green' : state?.marked && index == state?.markedAns ? '3px solid red' : '3px solid gray' }} key={index} className="p-5 space-x-4 rounded my-1">
                                    <span>{index + 1}.</span>
                                    <span>{option}</span>
                                </div>
                            );
                        })
                    }
                </div> */}
            </div>
            {/* {
                state?.testQuestion?.map((data, index) => {
                    return (<Question key={index} index={index} question={data?.question} correct_answer={data?.correct_answer} options={data?.options} />);
                })
            } */}
            <div className="flex justify-center p-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={next}>
                    {state?.index === state?.testQuestion?.length - 1 ? 'End Exercise' : 'Next'}
                </button>
            </div>
        </>
    );
};

export default Test;