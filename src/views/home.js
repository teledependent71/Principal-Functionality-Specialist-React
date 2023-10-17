import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Functionality Specialist</title>
        <meta
          property="og:title"
          content="Principal Functionality Specialist"
        />
      </Helmet>
    </div>
  )
}

export default Home
