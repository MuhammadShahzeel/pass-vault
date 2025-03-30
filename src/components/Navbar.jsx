
import { MdOutlineVpnKey } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="px-4 py-5 h-14 mycontainer flex justify-between items-center">

        <div className="logo font-bold text-white text-2xl flex items-center gap-2">
        <MdOutlineVpnKey style={{color:"yellowgreen"}} />
            
            PassVault
        </div>
        <ul>
            <li className="flex gap-4"><a href="">home</a>
            
            </li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
