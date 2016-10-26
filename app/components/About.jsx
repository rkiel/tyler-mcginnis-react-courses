import React from 'react';

import styles from './styles/About.css';

const About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p className={styles.basic}>Hello from About!</p>
      </div>
    )
  }
});

export default About;
