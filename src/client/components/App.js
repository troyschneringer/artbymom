import React from 'react'

import Nav from './Nav.js'
import Footer from './Footer.js'

export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <main>
        {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
})