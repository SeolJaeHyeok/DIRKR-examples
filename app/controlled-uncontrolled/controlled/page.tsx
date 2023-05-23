"use client"

import { Dispatch, SetStateAction, useState } from "react"

const ControlledInput = ({onChange, value}: {onChange: Dispatch<SetStateAction<string>>, value: string}) => {
  console.log('Controlled Component');
  return <input onChange={(e) => onChange(e.target.value)} value={value}></input>
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <form>
    <ControlledInput value={email} onChange={setEmail}/>
    <ControlledInput value={password} onChange={setPassword}/>
    <button>제출</button>
  </form>
}

export default function Page() {
  return <LoginForm />
}