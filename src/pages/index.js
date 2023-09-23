import * as React from 'react';
import {Link} from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby Site!</h1>
      <Link to = "/about">About Page</Link>
      <p>I'm making this by following Gatsby tutorial</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage