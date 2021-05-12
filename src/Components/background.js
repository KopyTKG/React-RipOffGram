
const Background = ({IsEnabled}) => {
    return(
        <>
            <div
            className={`main ${IsEnabled? "bg-gray-700" : "bg-gray-200"}`}
            >
             &nbsp;
            </div>
        </>
    );
}

export default Background;