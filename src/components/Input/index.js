import React from 'react'
export default class Input extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.count}</li>
        </ul>
      </div>
    )
  }
}