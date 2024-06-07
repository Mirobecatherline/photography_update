import React from 'react'

function Usernav() {
  return (
    <div>
        <div className='header_logo'>
            <div onClick={e=>setshowmenu(!showmenu)} className="menu"><AiOutlineMenu/></div>
            <h2>Varsity</h2>
            
       </div>
      
         <div className="sidenav">
        <ul>
            <li>
                <NavLink className="li" to="/">
					Home
				</NavLink>
            </li>
            <li>
                <NavLink className="li" to="/">
					Login
				</NavLink>
            </li>
            <li>
                <NavLink className="li" to="/">
					Logout
				</NavLink>
            </li>
                 
        </ul> 
    </div>
    </div>
  )
}

export default Usernav