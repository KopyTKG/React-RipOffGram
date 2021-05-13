import React from "react";
import Cookies from "js-cookie";
import FloatingLabel from "../Components/FloatingLabel";
import Logo from "../Components/svg/logo";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.sendLogin = this.sendLogin.bind(this);
    }
    sendLogin(e) {
         e.preventDefault();
        alert("aaa");
/*
        let userField = document.getElementById("username").value;
        let passField = document.getElementById("password").value;

        fetch("http://localhost:5454/login", {
            'method': 'POST',
            'headers': {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
                "username": userField,
                "password": passField
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            alert("gg");
            Cookies.set("success", res.success);
        })*/
    }
    render() 
    {
        return(
            <>
                <div className="pt-20 pb-3 w-full h-full flex items-center justify-center">
                    <form onSubmit={() => this.sendLogin} className="block items-center w-80 h-100 py-8 px-8 border-gray-300 border-1" action="#">
                        <div className="w-full flex justify-center mb-10">
                            <Logo modifier={1.3} />
                        </div>
                        <FloatingLabel 
                            label="Username"
                            inputId="username"
                            required={true}
                        />
                        <FloatingLabel 
                            className="my-2"
                            label="password"
                            inputId="password"
                            type="password"
                            required={true}
                        />
                        <button type="submit" className="my-2 w-full btn btn-primary" disabled={false}>
                            Login
                        </button>
                    </form>
                </div>
                <div className=" w-full h-full flex items-center justify-center">
                    <div className="border-1 border-gray-300 w-80 h-20 flex justify-center py-6">
                        <span className="text-md">
                            Dont have account? <a className="text-primary" href="/register"> Create one</a>
                        </span>
                    </div> 
                </div>
            </>
        );
    }
}
export default LoginPage;