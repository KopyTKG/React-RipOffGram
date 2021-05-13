const Error = ({setPosition}) => {
    return(
        <>
            {setPosition(null)}
            <span className="w-full h-full flex justify-center items-center text-4xl font-bold">
                    404 Error. Content not found.
            </span>
        </>
    );
}
export default Error;