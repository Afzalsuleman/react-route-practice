import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
export default function Login({setIsLoggedIn}) {
  return (
    <Template
      title="welcome Back"
      desc1="Builds skills for today, tomorrow and beyond"
      desc2="Education for future-proof your career"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
