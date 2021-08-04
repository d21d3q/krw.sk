import * as React from "react"
import Seo from "../components/seo"
import {
  Header 
 } from "../components/home"

const Home = () => {

  return (
    <main className="shadow max-w-5xl mx-auto p-4">
      <Seo title="Resume"/>
      <Header/>
    </main>
  )
}

export default Home