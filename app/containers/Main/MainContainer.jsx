import React from 'react'

const MainContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render: function () {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  },
})

export default MainContainer
