import React from 'react'

import { basic } from './styles.css';

const About = React.createClass({
  render: function () {
    return (
      <div className={basic}>
        <h1>{'About'}</h1>
        <p>{'Hello from About!'}</p>
      </div>
    )
  },
})

export default About
