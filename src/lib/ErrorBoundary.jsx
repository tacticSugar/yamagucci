import PageError from '@/src/components/pages/PageError/PageError'

import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)

    // define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    // update state so the next render will show the fallback UI

    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    // you can use your own error logging service here
    console.log({ error, errorInfo })
  }

  render () {
    // check if the error is thrown
    if (this.state.hasError) {
      // you can render any custom fallback UI
      return (
        <PageError code='jsError' />
      )
    }

    // return children components in case of no error

    return this.props.children
  }
}

export default ErrorBoundary
