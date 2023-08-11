import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Cards from './Cards'
import Grid from './Grid'
import Footer from './Footer'
export default function Landing() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Grid/>
      <Cards/>
      <Footer/>
    </div>
  )
}
