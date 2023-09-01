const Options = ({ options, markedAns, setMarkedAns, correct_answer }) => {
    return (
        <div className="space-y-1">
            <div onClick={() => {
                if (markedAns !== -1) {
                    alert('Please move to next question');
                }
                else {
                    setMarkedAns(0);
                }
            }} style={{ border: correct_answer === markedAns && correct_answer === 0 ? '3px solid green' : correct_answer !== markedAns && markedAns !== -1 && markedAns === 0 ? '3px solid red' : '3px solid gray' }} className="p-5 space-x-4 rounded">
                <span>1.</span>
                <span>{options?.length > 0 ? options[0] : ''}</span>
            </div>
            <div onClick={() => {
                if (markedAns !== -1) {
                    alert('Please move to next question');
                }
                else {
                    setMarkedAns(1);
                }
            }} style={{ border: correct_answer === markedAns && correct_answer === 1 ? '3px solid green' : correct_answer !== markedAns && markedAns !== -1 && markedAns === 1 ? '3px solid red' : '3px solid gray' }} className="p-5 space-x-4 rounded">
                <span>2.</span>
                <span>{options?.length > 0 ? options[1] : ''}</span>
            </div>
            <div onClick={() => {
                if (markedAns !== -1) {
                    alert('Please move to next question');
                }
                else {
                    setMarkedAns(2);
                }
            }} style={{ border: correct_answer === markedAns && correct_answer === 2 ? '3px solid green' : correct_answer !== markedAns && markedAns !== -1 && markedAns === 2 ? '3px solid red' : '3px solid gray' }} className="p-5 space-x-4 rounded">
                <span>3.</span>
                <span>{options?.length > 0 ? options[2] : ''}</span>
            </div>
            <div onClick={() => {
                if (markedAns !== -1) {
                    alert('Please move to next question');
                }
                else {
                    setMarkedAns(3);
                }
            }} style={{ border: correct_answer === markedAns && correct_answer === 3 ? '3px solid green' : correct_answer !== markedAns && markedAns !== -1 && markedAns === 3 ? '3px solid red' : '3px solid gray' }} className="p-5 space-x-4 rounded">
                <span>4.</span>
                <span>{options?.length > 0 ? options[3] : ''}</span>
            </div>
        </div>
    );
};

export default Options;