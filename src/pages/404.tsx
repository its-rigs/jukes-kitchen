import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="container mx-auto h-screen flex items-center justify-center">
      <div className="max-w-screen-sm px-5">
        <h1 className="text-5xl text-center">Oops, looks like this page doesn't exist</h1>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
