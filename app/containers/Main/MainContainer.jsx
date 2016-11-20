import React from 'react'
import { color } from './styles.css'

const MainContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render: function () {
    return (
      <div className={color}>
        {this.props.children}
      </div>
    )
  },
})

export default MainContainer
