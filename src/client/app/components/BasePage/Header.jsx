import React from 'react';

import styles from './css/_Header.css'

export default class Header extends React.Component {
  constructor(){
    super();

    this.render = this.render.bind(this);
  }

  render () {
    return(
      <div className={styles.header}>
        <p>Hello</p>
      </div>
    )
  }
}
