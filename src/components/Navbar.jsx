import { MdOutlineVpnKey } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="logo flex items-center gap-2 text-green-400 font-bold text-xl">
          <MdOutlineVpnKey className="text-2xl" />
          <span>PassVault</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="font-medium px-3 py-2 rounded-lg transition duration-200 hover:text-green-400 hover:bg-slate-700">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;