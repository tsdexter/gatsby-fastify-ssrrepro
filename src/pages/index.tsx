import { Link } from "gatsby"
import * as React from "react"

export const Nav = () => <ul>
  <li><Link to="/nested/page-1">SSG Page 1</Link></li>
  <li><Link to="/nested/page-2">SSG Page 2</Link></li>
  <li><Link to="/nested/page-3">SSG Page 3</Link></li>
  <li><Link to="/ssr-page">Regular SSR Page 1 (works)</Link></li>
  <li><Link to="/nested/fallback">SSR 'fallback' Page (doesn't work in prod, only dev or standard gatsby (ie: gatsby cloud))</Link></li>
</ul>

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations 
        <span> — you just made a Gatsby site! </span>
        🎉🎉🎉
      </h1>

      <Nav />
      
    </main>
  )
}

export default IndexPage
