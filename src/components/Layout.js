import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
      
      <Header />

     <div className="main">{children}</div>

      <div className="footer mt-3 bg-dark text-light text-center p-3">
        &copy: Copyright reserved 2024 Aakash Acharya
      </div>

    </div>
  )
}

export default Layout
