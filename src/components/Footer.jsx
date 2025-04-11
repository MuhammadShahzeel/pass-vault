import { MdOutlineVpnKey } from "react-icons/md";
import { FaHeart, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white shadow-lg border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <MdOutlineVpnKey className="text-xl text-green-400" />
            <span className="font-bold text-sm sm:text-base">PassVault</span>
          </div>
          
          {/* Center: Made with love by */}
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <span className="text-slate-400">Made with</span>
            <FaHeart className="text-green-400" />
            <span className="text-slate-400">by</span>
            <span className="text-green-400 font-medium">Muhammad Shahzeel</span>
          </div>
          
          {/* Right: GitHub icon */}
          <div>
            <a href="#" className="text-slate-400 hover:text-green-400 transition duration-200">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
        
        {/* Copyright - Hidden on very small screens */}
        <div className="text-center text-slate-500 text-xs mt-2">
          &copy; {currentYear} PassVault
        </div>
      </div>
    </footer>
  );
};

export default Footer;