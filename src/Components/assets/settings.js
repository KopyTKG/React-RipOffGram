import { Menu, Transition } from "@headlessui/react";
import {Fragment} from "react";
import { BookmarkIcon, LogoutIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/outline';
import { CogIcon } from "@heroicons/react/solid";

 const Settings = ({src, IsEnabled, setIsEnabled}) => {
     const RedirectTo = (path) => {
         window.location.href = path;
     }
  return ( 
      <div className="w-8 h-full flex justify-center items-center">
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="h-8 justify-center items-center">
                    <img src={src} alt="profile" className="h-8 w-8 rounded-full"/>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
            <Menu.Items 
                className={`
                    absolute
                    right-0
                    w-60
                    mt-2
                    origin-top-right
                    bg-white
                    divide-y
                    divide-gray-100
                    rounded-md
                    shadow-lg
                    ring-1
                    ring-black
                    ring-opacity-5
                    focus:
                        outline-none
                `}
            >
                <div className="px-1 py-2 border-b-2">
                    <Menu.Item>
                        <button 
                            className="settings-link block flex flex-center justify-center text-black w-3/4 py-1 my-1 mx-2"
                            onClick={() => {RedirectTo("/profile")}}
                        >
                            <div className="w-1/4 flex justify-end mr-3 items-center">
                            <UserCircleIcon className="w-6 h-6" />
                            </div>
                            <div className="w-3/4 flex items-center">
                            <span className="text-l text-black">
                                    Profile
                                </span>
                            </div>
                        </button>
                        
                    </Menu.Item>
                    <Menu.Item>
                        <button 
                            className="settings-link block flex flex-center justify-center text-black w-3/4 py-1 my-1 mx-2"
                            onClick={() => {RedirectTo("/saved")}}
                        >
                            <div className="w-1/4 flex justify-end mr-3 items-center">
                            <BookmarkIcon className="w-6 h-6" />
                            </div>
                            <div className="w-3/4 flex items-center">
                            <span className="text-l text-black">
                                    Saved
                                </span>
                            </div>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button
                            className="settings-link block flex flex-center justify-center text-black w-3/4 py-1 my-1 mx-2"
                            onClick={() => {RedirectTo("/account/settings")}}    
                        >
                            <div className="w-1/4 flex justify-end mr-3 items-center">
                            <CogIcon className="w-6 h-6" />
                            </div>
                            <div className="w-3/4 flex items-center">
                            <span className="text-l text-black">
                                    Settings
                                </span>
                            </div>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button 
                            className="settings-link block flex flex-center justify-center text-black w-3/4 py-1 my-1 mx-2"
                            onClick={() => {RedirectTo("/swap")}}
                        >
                            <div className="w-1/4 flex justify-end mr-3 items-center">
                            <UserGroupIcon className="w-6 h-6" />
                            </div>
                            <div className="w-3/4 flex items-center">
                            <span className="text-l text-black">
                                    Change account
                                </span>
                            </div>
                        </button>
                    </Menu.Item>
                </div>
                <div className="px-1 py-2">
                <Menu.Item>
                    <button className="settings-link block flex flex-center justify-center text-black w-3/4 py-1 mx-2">
                        <div className="w-1/4 flex justify-end mr-3 items-center">
                        <LogoutIcon className="w-6 h-6" />
                        </div>
                        <div className="w-3/4 flex items-center">
                        <span className="text-l text-black">
                                Log out
                            </span>
                        </div>
                    </button>
                </Menu.Item>
                </div>
            </Menu.Items>
            </Transition>
        </Menu>
      </div>
  );
}

export default Settings;