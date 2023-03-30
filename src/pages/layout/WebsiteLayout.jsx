import React from 'react'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
  return (
    <div>
      <header>
        <a href="/" >HomePage</a>
        <a href="/products">Products</a>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  )
}

export default WebsiteLayout
