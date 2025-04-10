import { MdOutlineVpnKey } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="logo flex items-center gap-2 text-green-400 font-bold text-xl">
          <MdOutlineVpnKey className="text-2xl" />
          <span className="text-white">PassVault</span>
        </div>
        
        <div className="flex items-center ">
          <a 
            href="https://github.com/yourusername/passvault" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" flex items-center gap-1 bg-green-400 hover:bg-green-500 text-slate-900 font-medium py-1.5 px-4 rounded-md text-sm transition duration-200 shadow hover:shadow-md active:bg-green-600 active:translate-y-0.5"
          >
            <FaGithub className="text-base" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;