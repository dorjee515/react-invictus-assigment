import React from 'react'

export const Header = () => {
   
   const head={
       marginLeft:"22px",
       textDecoration:"underline",
       textShadow: "2px 2px 5px red"    
      }
    return (
      
       <header>
          <h1 style={head}>Invictus Assignment</h1>
       </header>
    )
}
export default Header