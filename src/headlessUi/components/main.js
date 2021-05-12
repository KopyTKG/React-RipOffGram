import { Switch } from "@headlessui/react";

import "../style/main.min.css";

 const TestingUI = ({isEnabled, setIsEnabled}) => {
  return ( 
    <>
      <h1 className={`mb-2 text-4xl ${isEnabled? "text-white": "text-black"} font-semibold`}>
        Theme selector
      </h1>

      <div>
        <Switch checked={isEnabled} onChange={setIsEnabled}>
          <span
            className={`block rounded-full shadow p-2 h-14 w-24 flex ${
              isEnabled ? "bg-gray-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`block h-full w-1/2 rounded-full transition duration-500 ease-in-out transform ${
                isEnabled ? "bg-white translate-x-full" : "bg-black"
              }`}
            ></span>
          </span>
        </Switch>
      </div>
    </>
  );
}

export default TestingUI;