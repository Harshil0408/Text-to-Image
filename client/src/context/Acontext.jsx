import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { createContext } from "react";
import { toast } from "react-toastify";
import axios from 'axios'


export const Acontext = createContext();

const AcontextProvider = (props) => {
    const [user , setuser] = useState(false);
    const [showLogin, setshowLogin] = useState(false);
    const [token,settoken] = useState(localStorage.getItem('token'));
    const [credit, setcredit] = useState(false)
    const naivgate = useNavigate();

    

    const backendUrl = import.meta.env.VITE_BACKENDURL

    const loadCreditData = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/user/credits' , {headers:{token}})
            if(data.sucess){
                setcredit(data.credits)
                setuser(data.user)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const generateImage = async(prompt)=>{ 
        try {
            const {data}= await axios.post(backendUrl  + '/api/image/generate-image',{prompt},{headers:{token}})
            if(data.success){
                loadCreditData();
                return data.resultImage;
            }
            else{
                toast.error(data.message)
                loadCreditData()
                if(data.creditBalance === 0 ){
                    naivgate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout =()=>{
        localStorage.removeItem('token')
        settoken('')
        setuser(null)
    }
    useEffect(()=>{
        if(token){
            loadCreditData()
        }
    },[token])

    const value = {
        user,setuser,showLogin,setshowLogin,backendUrl,token,settoken,credit,setcredit,loadCreditData,logout,generateImage
    }

    return(
        <Acontext.Provider value={value}>
            {props.children}
        </Acontext.Provider>
    )
}

export default AcontextProvider