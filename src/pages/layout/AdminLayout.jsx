import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <aside>
        <a href="/admin">Dờ rát bót</a>
        <a href="/admin/products">ADMIN</a>
      </aside>
     <main>
        <Outlet/>
     </main>
    </div>
  )
}

export default AdminLayout
