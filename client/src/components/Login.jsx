import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { Acontext } from "../context/Acontext";
import axios from 'axios'
import { toast } from "react-toastify";

const Login = () => {
  const [state, setstate] = useState("Login");
  const {setshowLogin , backendUrl ,settoken ,setuser} = useContext(Acontext);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const onSubmitHandler = async (e)=>{
    e.preventDefault();

    try {
      if(state == 'Login'){
        const {data} = await axios.post(backendUrl + '/api/user/login',{email,password});
        if(data.sucess){
          settoken(data.token)
          setuser(data.user)
          localStorage.getItem('token',data.token);
          setshowLogin(false);
          toast('login successfully')
        }
        else{
          toast.error(data.message)
        }

      }
      else{
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,email,password});
        if(data.sucess){
          settoken(data.token)
          setuser(data.user)
          localStorage.getItem('token',data.token);
          setshowLogin(false);
          toast('account has been created')
        }
        else{
          toast.error(data.message)
        }

      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white rounded-xl p-10 text-slate-500" onSubmit={onSubmitHandler}>
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome! Please sign in to continue</p>
        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
            <img src={assets.profile_icon} width={25} alt="" />
            <input
            onChange={(e)=>{setname(e.target.value)}}
            value={name}
              type="text"
              placeholder="Full Name"
              className="outline-none text-sm"
              required
            />
          </div>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
          <img src={assets.email_icon} alt="" />
          <input
            onChange={(e)=>{setemail(e.target.value)}}
            value={email}
            type="email"
            placeholder="Email id"
            className="outline-none text-sm ml-2"
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 mb-4 rounded-full mt-5 ">
          <img src={assets.lock_icon} alt="" />
          <input
          onChange={(e)=>{setpassword(e.target.value)}}
          value={password}
            type="password"
            placeholder="Password"
            className="outline-none text-sm ml-3"
            required
          />
        </div>
        {state !== "Sign up" && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forget password?
          </p>
        )}
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state == "Login" ? "Login" : "Sign up"}
        </button>
        {state == "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setstate("Sign up");
              }}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setstate("Login");
              }}
            >
              Login
            </span>
          </p>
        )}

        <img onClick={()=>setshowLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        />
      </form>
    </div>
  );
};

export default Login;
