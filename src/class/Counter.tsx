import React, { Component } from 'react'

interface CounterProps {
    message: string
}

interface CounterState {
    count: number
}

class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({...prevState, count: prevState.count + 1}))
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Incremeant</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}

export default Counter