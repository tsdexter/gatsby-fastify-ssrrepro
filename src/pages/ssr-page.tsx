/**
 * Create a page for all wpPage nodes automatically via
 * filesystem routing: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 */
 import * as React from "react"
 import { graphql } from "gatsby"
import { Nav } from "."
 
 interface IPageProps {
   serverData: {
    data: {
      content: string
    }
  }
 }
 
 export default function Page(props): JSX.Element {
   const content = props.serverData.data.content
 
   return <div>
    SSR Page Content: {content}
    <Nav />
   </div>
 }
 
 export async function getServerData({
   params,
 }: {
   params: { slug: string }
 }) {
   console.log('processing on server')
   return {
     props: {
       data: {
         content: "SSR Content from server",
       },
     },
   }
 }
 