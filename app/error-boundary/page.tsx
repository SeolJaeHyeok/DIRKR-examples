'use client'

import { Component, ErrorInfo, ReactNode, useEffect, useState } from 'react'
import ComponentWithError from './components/ComponentWithError'
import { GetStaticProps } from 'next'
import ErrorBoundary from '@/components/ErrorBoundary/error-boundary'
import ComponentWithNoError from './components/ComponentWithNoError'

export default function Page0() {
  const [state, setState] = useState({})
  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://api.github.com/repos/vercel/next.js')
      const repo = await res.json()
      setState(repo)
    })()
  }, [])
  return (
    <ErrorBoundary fallback={<h1>Page에서 발생한 Runtime Error</h1>}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ComponentWithNoError data={state} />
        <ComponentWithError data={state} />
      </div>
    </ErrorBoundary>
  )
}
