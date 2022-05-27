function EndQuiz(props) {
    const percentCorrect = (100 * props.numCorrect) / 5;
    let header;
    header = (
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 text-center">
            Você gosta de {" "}
            <span className="text-green-500"> {percentCorrect}% </span>
            das películas apresentadas.
        </h1>
    );

    return (
        <div className="flex justify-center items-center h-screen">
            {header}
        </div>
    );
}

export default EndQuiz;
