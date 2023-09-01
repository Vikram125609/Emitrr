import { useReducer } from "react";
import Row from "./Row";

const initialState = {
    markedAns: -1,
    // marked: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'markedAns':
            return { ...state, markedAns: action?.value };
        // case 'marked':
        //     return { ...state, marked: true };
    }
};

const Question = ({ index, question, correct_answer, options }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="p-10">
            <div style={{ backgroundColor: '#b7d2ff' }} className="p-5 rounded space-x-4">
                <span>{index + 1}.</span>
                <span>{question}</span>
            </div>
            <div>
                {
                    options?.map((option, index) => {
                        return (
                            <Row key={index} option={option} index={index} correct_answer={correct_answer} dispatch={dispatch} markedAns={state?.markedAns} />
                        );
                    })
                }
            </div>
        </div>
    );
};
export default Question;