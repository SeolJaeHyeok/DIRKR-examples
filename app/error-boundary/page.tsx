import { Component, ErrorInfo, ReactNode } from 'react'
import ComponentWithError from './components/ComponentWithError'

interface IErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface IState {
  hasError: boolean
}

class CErrorBoundary extends Component<IErrorBoundaryProps, IState> {
  public state: IState = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): IState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error Boundary :', error, errorInfo)
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

export default function Page() {
  return (
    <CErrorBoundary fallback={<div>Error Occured</div>}>
      <ComponentWithError />
    </CErrorBoundary>
  )
}
