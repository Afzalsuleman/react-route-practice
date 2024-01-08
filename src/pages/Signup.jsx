import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template'
export default function Signup({setIsLoggedIn}) {
  return (
    <Template
      title="welcome Back"
      desc1="Builds skills for today, tomorrow and beyond"
      desc2="Education for future-proof your career"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
