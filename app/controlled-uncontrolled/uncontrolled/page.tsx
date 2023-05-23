"use client"
import { useState } from "react"

const UncontrolledInput= ({defaultValue, placeholder}: {defaultValue: string, placeholder: string}) => {
  const [value, setValue] = useState(defaultValue);
  console.log('Uncontrolled Component')
  return <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
}

const LoginForm = () => {
  return <form>
    <UncontrolledInput defaultValue='' placeholder="Email"/>
    <UncontrolledInput defaultValue='' placeholder='Password'/>
    <button>제출</button>
  </form>
}


export default function Page() {
  
  return <LoginForm />
}