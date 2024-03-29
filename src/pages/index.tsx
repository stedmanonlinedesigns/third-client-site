import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Button from "../components/Button"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Third client page</h1>
      <p>Here is some added content.</p>
      <Button look="contained" />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
