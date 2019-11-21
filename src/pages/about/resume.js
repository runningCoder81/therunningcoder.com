import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Hi from the Resume Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
