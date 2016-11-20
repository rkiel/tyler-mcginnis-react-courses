import React from 'react'

import { basic } from './styles.css';

const Home = React.createClass({
  render: function () {
    return (
      <div className={basic}>
        <h1>{'Home'}</h1>
        <p>{'Hello from Home!'}</p>
      </div>
    )
  },
})

export default Home
