import { useEffect } from 'react'

export default function ComponentWithError() {
  useEffect(() => {
    fetch('/this/is/wrong/api', { method: 'GET' })
  }, [])
  return <div>Component With Error</div>
}
