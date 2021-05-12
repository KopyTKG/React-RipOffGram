import React, { useState } from "react";

import Lightbox from './lightbox/components/lightbox-main';
import App from './headlessUi/components/main';

const Routes = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return(
        <div className={`min-h-screen
                    flex
                    flex-col
                    ${isEnabled? "bg-dark" : "bg-light"}
                    items-center
                    justify-center
                    `}>
            {/* Core call to the Lightbox component */}
            <App isEnabled={isEnabled} setIsEnabled={setIsEnabled}/>
            <Lightbox Theme={isEnabled}/>
            
        </div>
    );
}

export default Routes;