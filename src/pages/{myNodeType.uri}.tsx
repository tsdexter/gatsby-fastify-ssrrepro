/**
 * Create a page for all wpPage nodes automatically via
 * filesystem routing: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 */
 import * as React from "react"
 import { graphql } from "gatsby"
import { Nav } from "."
 
interface IPageProps {
    data: {
      myNodeType: {
        content: string
      }
    }
 }
 
 export default function Page(props: IPageProps): JSX.Element {
    const content = props?.data?.myNodeType?.content
    console.log({props, content})
   return <div>
    {content}
    <Nav />
   </div>
 }
 
 export const query = graphql`
   query myNodeType($uri: String!) {
     myNodeType(uri: { eq: $uri }) {
       content
     }
   }
 `
 