const Row = ({ option, index, correct_answer, markedAns, dispatch }) => {
    return (
        <>
            <div onClick={() => {
                if (markedAns !== -1) {
                    alert('Move to the next question');
                }
                else {
                    dispatch({ type: 'markedAns', value: index })
                }
            }} style={{ border: markedAns === index && markedAns !== correct_answer ? '3px solid red' : index === correct_answer && markedAns === correct_answer ? '3px solid green' : '3px solid gray' }} key={index} className="p-5 space-x-4 rounded my-1">
                <span>{index + 1}.</span>
                <span>{option}</span>
            </div>
        </>
    );
};
export default Row;