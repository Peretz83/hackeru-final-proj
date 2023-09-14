import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - LeeCommerce"}>
      <h1>About</h1>
    </Layout>
  )
}

Layout.defaultProps={
title: 'LeeCommerce - shop now',
description: "Project",
keywords: "mern, react, node, mongodb",
author: "Lee Peretz"
}

export default About
