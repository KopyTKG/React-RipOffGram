const Placeholder = ({setPosition, SetTo}) => {
    return(
        <>
            {setPosition(SetTo)}
            <span className="w-full h-full flex justify-center items-center text-4xl font-bold">
                500 status. Welcome to placeholder. - {SetTo}
            </span>
        </>
    )
}

export default Placeholder;