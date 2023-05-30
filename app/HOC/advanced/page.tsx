"use client"
import React, { useEffect, useState } from "react";

const withAuthentication = (WrapperComponent: any) => {
  const WithAuthentication = (props: any) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsAuth(true)
      }, 2000)
    }, []);

    if (!isAuth) {
      return <div>Loading...</div>
    }

    return <WrapperComponent {...props} />
  };

  return WithAuthentication;
}


function HOCAdvanced() {
  return <div>로그인한 유저만 볼 수 있는 페이지입니다.</div>
};

export default function Page() {
  const HOC = withAuthentication(HOCAdvanced);

  return <HOC />
}
