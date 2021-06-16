import {useState} from 'react';



const Testing = () => {
        const [IsDown, setIsDown] = useState(false)
        return(
            <>

             <button type="button" className="w-50 h-10 text-center bg-green-50" onClick={() => {setIsDown(!IsDown)}}>
                Testing label
             </button>
             
             <div 
             className={"block slide " + (IsDown? "visible": "hidden")}

            >
                <div className="w-100 h-100 align-content-center">
                    <img src={process.env.PUBLIC_URL + "/logo.png"} className="w-25 h-25 rounded-full"/>
                </div>
             </div>
            </>
        );
    
}

export default Testing;