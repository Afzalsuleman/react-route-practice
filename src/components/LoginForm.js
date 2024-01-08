import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function LoginForm({setIsLoggedIn}) {
    const navigate=useNavigate()
    const[formData,setFormData] =useState(
        {
            email:"",password:""
        }
    )
    const[showPassword,setShowPassword]=useState(true);
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }
    function submitHnadler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in sucessfully!");
        console.log(formData);
        navigate("/dashboard");
        
    }
  return (
    <form onSubmit={submitHnadler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type="email"
                placeholder="enter your email address"
                value={formData.email}
                onChange={changeHandler}
                name="email" // Add name attribute to the input
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type={showPassword? "text":"password"}
                placeholder="enter your Password"
                value={formData.password}
                onChange={changeHandler}
                name="password" // Add name attribute to the input
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span
            className='absolute right-3 top-[38px] cursor-pointer '
             onClick={()=>setShowPassword(prev=>!prev)}>
                 {showPassword?
                 (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                 :(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)
                 }
            </span>
            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forget Password
                </p>
            </Link>
        </label>
        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            sign in
        </button>
    {/* Add similar input fields for other form fields if needed */}
    </form>);
}

