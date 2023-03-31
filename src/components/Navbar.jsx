import {NavLink} from "react-router-dom";



function Navbar() {
  return (
    <div className="bg-primary p-4" >
      <NavLink style={{color:"white"}} to="/">Atras</NavLink>
    </div>
  )
}

export default Navbar;
