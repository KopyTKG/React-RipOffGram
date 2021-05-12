import {    HomeIcon as HomeFull            ,
            PaperAirplaneIcon as PlaneFull  ,
            HeartIcon as HeartFull          ,
            GlobeIcon as GlobeFull          ,
            SearchIcon 
        } from "@heroicons/react/solid";
import {    HomeIcon as HomeBorder              ,
            PaperAirplaneIcon as PlaneBorder    ,
            GlobeIcon as GlobeBorder            ,
            HeartIcon as HeartBorder 
        } from "@heroicons/react/outline";
import React from "react";
import Settings from "./assets/settings";
import Logo from "./svg/logo";

const Navbar = ({IsEnabled,setIsEnabled}) => {
    const RedirectTo = (path) => {
        window.location.href = path;
    }
    return(
        <div    
            className={`
                top-0
                w-full
                block
                flex
                bg-white
                bg-opacity-40
                h-12
                fixed
                border-b
                border-gray-300
            `}
        >
            <div className="w-1/3 flex justify-end items-center">
                <a href="/">
                    <Logo modifier="2"/>
                </a>
            </div>
            <div className="w-1/3 flex justify-center items-center">
                <form
                    className={`
                        w-2/4
                        flex
                        justify-center
                        items-center
                        `}
                >
                    <div
                        className={`
                            text-gray-400
                            focus-within:text-gray-600
                            w-full
                        `}
                    >
                        <div 
                            className="search-svg"
                        >
                                <SearchIcon 
                                    className={`
                                        h-5
                                        w-5
                                        my-2
                                        mx-2
                                    `}
                                />                        
                        </div>
                        <input 
                            type="text" 
                            className={`
                                h-10
                                w-full
                                border
                                border-gray-400
                                text-left
                                px-10
                                rounded
                                focus:ring-2 focus:ring-gray-300
                                `} 
                            />
                    </div>
                </form>
            </div>
            <div className="w-1/3 flex justify-center items-center">
                <div className="ml-2 w-8 h-full">
                    <button 
                        className="w-full h-full"
                        onClick={() => {RedirectTo("/")}}
                    >
                        {IsEnabled?
                            <HomeBorder className="w-full h-full" />
                            : 
                            <HomeFull className="w-full h-full" />  
                        }
                    </button>
                </div>
                <div className="ml-2 w-8 h-full plane-rotate">
                    <button 
                        className="w-full h-full"
                        onClick={() => {RedirectTo("/direct/inbox/")}}
                    >
                        {IsEnabled?
                        <PlaneFull className="w-full h-full" />
                        :
                        <PlaneBorder className="w-full h-full" />
                        }
                    </button>
                </div>
                <div className="ml-2 w-8 h-full">
                    <button 
                        className="w-full h-full"
                        onClick={() => {RedirectTo("/explore/")}}
                    >
                        {IsEnabled?
                        <GlobeFull className="w-full h-full" />
                        :
                        <GlobeBorder className="w-full h-full" />
                        }
                    </button>
                </div>
                <div className="ml-2 w-8 h-full">
                    <button 
                        className="w-full h-full"
                        onClick={() => {RedirectTo("/direct/activity/")}}
                    >
                        {IsEnabled?
                        <HeartFull className="w-full h-full" />
                        :
                        <HeartBorder className="w-full h-full" />
                        }
                    </button>
                </div>
                <div className="ml-2 w-8 h-full">
                    <Settings 
                        src={process.env.PUBLIC_URL+"/logo.png"}
                        IsEnabled={IsEnabled} 
                        setIsEnabled={setIsEnabled} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;