import React, { Component } from "react"

import { 
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles"

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    }
  }

  static getDerivedStateFromError(error) {
    // process error
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  } 

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={"https://i.imgur.com/A040Lxr.png"} />
          <ErrorImageText>
            LOST IN THE SAUCE WE ARE.
          </ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary





