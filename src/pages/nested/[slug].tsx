/**
 * Create a page for all wpPage nodes automatically via
 * filesystem routing: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 */
 import * as React from "react"
 import { graphql } from "gatsby"
import { Nav } from "../"
 
 interface IPageProps {
   serverData: {
    data: {
      slug: string
    }
  }
 }
 
 export default function Page(props): JSX.Element {
   const slug = props.serverData.data.slug
 
   return <div>
    Nested SSR 'catchall' Page - slug: {slug}
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
         slug: params.slug,
       },
     },
   }
 }
 