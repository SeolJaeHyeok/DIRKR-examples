"use client"
import { useEffect } from "react"

const withLogger = (WrappedComponent: any) => {
  // Component를 반환하는 함수  
  const WithLogger = (props: any) => {
    // Do Something, AJAX, Data, Event, Etc..
    useEffect(() => {
      alert(`${props.name} Component is mounted` );
      return () => {
        alert(`${props.name} Component is unmounted` );
      }
    }, []);

    return <WrappedComponent {...props}/>
  }

  return WithLogger
}

 function HOCBasic() {
  return <div>HOC Basic</div>
}

export default function Page() {
  const HOC= withLogger(HOCBasic);

  return <HOC name={'milkboy2564'}/>
}
